import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';

import { BodyComponent } from './body/body.component';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RejestracjaComponent } from './rejestracja/rejestracja.component';

@Component({
  selector: 'app-root',
  imports: [FormsModule, CommonModule, HeaderComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Restauracja';

  // Zmienna, która przechowuje stan menu
  menuActive: boolean = false;

  // Metoda do przełączania stanu menu
  toggleMenu(event: Event) {
    this.menuActive = !this.menuActive;
    event.stopPropagation(); // Zatrzymuje propagację kliknięcia, aby menu się nie zamknięło natychmiast
  }
}
