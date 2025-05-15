
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

interface ReservationHistory {
  id: number;
  restaurantTable: RestaurantTable;
  reservationDate: string;
  reservationTime: string;
  reservationEndTime: string;
}

interface Reservation {
  tableId: number;
  date: string;
  startTime: string;
  endTime: string;
  people: number;
}

interface RestaurantTable {
  id: number;
  name: string;
  description: string;
  size: number;
}

@Injectable({
  providedIn: 'root'
})
export class RezerwacjaService {
  private apiUrl = 'http://localhost:9040/api';

  constructor(private http: HttpClient) {}

  getAvailableTables(people: number, date: string, startTime: string, endTime: string): Observable<RestaurantTable[]> {
    const params = {
      people: people.toString(),
      date,
      startTime,
      endTime
    };

    return this.http.post<RestaurantTable[]>(`${this.apiUrl}/tables/available`, params);
  }

 
  createReservation(reservation: Reservation): Observable<any> {
    return this.http.post(`${this.apiUrl}/reservations`, reservation, {withCredentials: true, headers: new HttpHeaders({'Content-type': 'application/json'})});
  }


  getReservations(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/reservations`, {withCredentials: true});
  }

  isReservationValid(startTime: string, endTime: string): boolean {
    const start = new Date(`2000-01-01T${startTime}`);
    const end = new Date(`2000-01-01T${endTime}`);
    const duration = (end.getTime() - start.getTime()) / (1000 * 60);
    return duration >= 30;
  }


  getAllReservations(): Observable<ReservationHistory[]> {
    return this.http.get<ReservationHistory[]>(
      `${this.apiUrl}/reservations/history/all`,
      { withCredentials: true }
    );
  }
}