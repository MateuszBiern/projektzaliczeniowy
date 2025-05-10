import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-rejestracja',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './rejestracja.component.html',
  styleUrl: './rejestracja.component.css',
})
export class RejestracjaComponent {}
