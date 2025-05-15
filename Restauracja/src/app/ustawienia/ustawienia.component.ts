import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-ustawienia',
  standalone: true,
  templateUrl: './ustawienia.component.html',
  styleUrls: ['./ustawienia.component.css'],
  imports: [RouterLink],
})
export class UstawieniaComponent implements OnInit {
  username: string = '';
  email: string = '';

  constructor(private authService: AuthService) {}

  ngOnInit() {

    const currentUser = this.authService.currentUserValue;
    if (currentUser) {
      this.username = currentUser.username || '';
      this.email = currentUser.email || '';
      
      
      localStorage.setItem('username', this.username);
      localStorage.setItem('email', this.email);
    } else {
      
      this.username = localStorage.getItem('username') || '';
      this.email = localStorage.getItem('email') || '';
    }
  }
}