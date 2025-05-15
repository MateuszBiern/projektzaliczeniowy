// historia.component.ts
import { Component, OnInit } from '@angular/core';
import { RezerwacjaService } from '../rezerwacja.service';
import { AuthService } from '../auth.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './historia.component.html',
  styleUrls: ['./historia.component.css']
})
export class HistoriaComponent implements OnInit {
  allReservations: any[] = [];
  upcomingReservations: any[] = [];
  pastReservations: any[] = [];
  isLoading = true;
  activeTab: 'upcoming' | 'past' = 'upcoming';
  username: string = '';
  email: string = '';

  constructor(
    private rezerwacjaService: RezerwacjaService,
    private authService: AuthService
  ) {}

  ngOnInit() {
  if (!this.authService.isLoggedIn) {
    // Redirect to login if not authenticated
    return;
  }
  this.loadReservations();
}

loadReservations() {
  this.isLoading = true;
  this.rezerwacjaService.getAllReservations().subscribe({
    next: (reservations) => {
      this.allReservations = reservations;
      this.filterReservations();
      this.isLoading = false;
    },
    error: (err) => {
      console.error('Error loading reservations:', err);
      if (err.status === 401) {
        // Handle unauthorized (session expired)
        this.authService.logout().subscribe();
      }
      this.isLoading = false;
    }
  });
}

  filterReservations() {
    const now = new Date();
    this.upcomingReservations = this.allReservations.filter(res => new Date(res.reservationDate + 'T' + res.reservationTime) >= now);
    this.pastReservations = this.allReservations.filter(res => new Date(res.reservationDate + 'T' + res.reservationTime) < now);

    // Optionally sort them as well
    this.upcomingReservations.sort((a, b) => new Date(a.reservationDate + 'T' + a.reservationTime).getTime() - new Date(b.reservationDate + 'T' + b.reservationTime).getTime());
    this.pastReservations.sort((a, b) => new Date(b.reservationDate + 'T' + b.reservationTime).getTime() - new Date(a.reservationDate + 'T' + a.reservationTime).getTime());
  }

  switchTab(tab: 'upcoming' | 'past') {
    this.activeTab = tab;
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('pl-PL');
  }

  formatTime(timeString: string): string {
    const time = timeString.split(':');
    return `${time[0]}:${time[1]}`;
  }
}