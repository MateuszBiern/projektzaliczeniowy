import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RezerwacjaService } from '../rezerwacja.service';

@Component({
  selector: 'app-historia',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './historia.component.html',
  styleUrls: ['./historia.component.css'],
})
export class HistoriaComponent {
  rezerwacje: { data: string; godzina: string; osoby: number }[] = [];

  constructor(private rezerwacjaService: RezerwacjaService) {
    this.rezerwacje = this.rezerwacjaService.pobierzRezerwacje();
  }
}
