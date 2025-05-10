import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isLoggedInSubject = new BehaviorSubject<boolean>(false); // Domyślnie niezalogowany
  isLoggedIn$ = this.isLoggedInSubject.asObservable(); // Publiczna observable

  constructor() {
    // Po załadowaniu aplikacji sprawdź stan logowania z localStorage
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
    this.isLoggedInSubject.next(loggedIn);
  }

  login() {
    localStorage.setItem('isLoggedIn', 'true');
    this.isLoggedInSubject.next(true); // Emituj zmianę stanu
  }

  logout() {
    localStorage.removeItem('isLoggedIn');
    this.isLoggedInSubject.next(false);
    // Emituj zmianę stanu
  }
}
