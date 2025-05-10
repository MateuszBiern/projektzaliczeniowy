import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  title = 'Restauracja';
  // Zmienna, która przechowuje stan menu
  menuActive: boolean = false;
  // Metoda do przełączania stanu menu
  toggleMenu(event: Event) {
    this.menuActive = !this.menuActive;
    event.stopPropagation(); // Zatrzymuje propagację kliknięcia, aby menu się nie zamknięło natychmiast
  }
}
