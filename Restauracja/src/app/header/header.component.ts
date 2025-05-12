import {
  Component,
  OnInit,
  ChangeDetectorRef,
  AfterViewInit,
} from '@angular/core';
import { AuthService } from '../auth.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, AfterViewInit {
  title = 'Restauracja';
  menuActive: boolean = false;
  isLoggedIn: boolean = false;

  constructor(
    private authService: AuthService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    // Subskrypcja zmian logowania
    this.authService.isLoggedIn$.subscribe((isLoggedIn) => {
      this.isLoggedIn = isLoggedIn;
      this.cdr.detectChanges(); // wymuszamy odświeżenie widoku
    });
  }

  ngAfterViewInit(): void {
    // nasłuchujemy kliknięcia dokumentu, żeby schować menu gdy klikniesz gdziekolwiek indziej
    document.addEventListener('click', this.handleOutsideClick.bind(this));
  }

  toggleMenu(event: Event) {
    console.log('Kliknięto burgera');
    this.menuActive = !this.menuActive;
    console.log('Stan menuActive:', this.menuActive);
    event.stopPropagation();
  }

  logout() {
    this.authService.logout();
    this.menuActive = false; // zamykamy menu przy wylogowaniu
  }

  private handleOutsideClick(event: Event) {
    if (this.menuActive) {
      const menu = document.getElementById('menuItems');
      const burger = document.getElementById('burgerMenu');
      if (
        menu &&
        burger &&
        !menu.contains(event.target as Node) &&
        !burger.contains(event.target as Node)
      ) {
        this.menuActive = false;

        this.cdr.detectChanges(); // wymuszamy aktualizację widoku
      }
    }
  }
}
