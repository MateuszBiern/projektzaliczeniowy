import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RezerwacjaService {
  private rezerwacje: any[] = [];

  dodajRezerwacje(rezerwacja: any): void {
    this.rezerwacje.push(rezerwacja);
  }

  pobierzRezerwacje(): any[] {
    return this.rezerwacje;
  }
}
