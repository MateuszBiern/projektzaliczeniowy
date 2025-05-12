import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http'; // Dodaj HttpClientModule
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, HttpClientModule], // DODAJ HttpClientModule
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  successMessage: string = '';
  errorMessage: string = '';

  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private router: Router
  ) {}

  login() {
    const user = {
      email: this.email,
      password: this.password,
    };

    this.http
      .post<any>(
        'http://localhost/projektzaliczeniowy/angu/backend/login.php',
        user
      )

      .subscribe((response) => {
        if (response.success) {
          // Zapisujemy dane do localStorage
          localStorage.setItem('isLoggedIn', 'true');
          localStorage.setItem('email', response.email);
          localStorage.setItem('username', response.username);
          this.authService.login(); // jeśli masz taki serwis

          this.router.navigate(['/body']);
        } else {
          alert('Błąd logowania: ' + response.message);
        }
      });
  }
}
