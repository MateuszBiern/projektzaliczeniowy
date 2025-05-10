import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-rejestracja',
  standalone: true,
  templateUrl: './rejestracja.component.html',
  styleUrls: ['./rejestracja.component.css'],
  imports: [CommonModule, FormsModule, RouterModule, HttpClientModule],
})
export class RejestracjaComponent {
  username: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  register() {
    if (this.password !== this.confirmPassword) {
      alert('Hasła nie są takie same!');
      return;
    }

    const user = {
      username: this.username,
      email: this.email,
      password: this.password,
    };

    this.http
      .post<any>(
        'http://localhost/projektzaliczeniowy/angu/backend/rejestracja.php',
        user
      )
      .subscribe(
        (response) => {
          if (response.success) {
            // Zapisz dane użytkownika
            localStorage.setItem('username', this.username);
            localStorage.setItem('email', this.email);

            alert('Rejestracja zakończona sukcesem!');

            // Wyczyść formularz (odświeżenie danych)
            this.username = '';
            this.email = '';
            this.password = '';
            this.confirmPassword = '';

            // Przekieruj po 1 sekundzie
            setTimeout(() => this.router.navigate(['/login']), 1000);
          } else {
            alert('Błąd rejestracji: ' + response.message);
          }
        },
        (error) => {
          console.error(error);
          alert('Wystąpił błąd podczas rejestracji.');
        }
      );
  }
}
