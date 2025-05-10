import { AfterViewInit, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RezerwacjaService } from '../rezerwacja.service';

@Component({
  selector: 'app-rezerwacja',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './rezerwacja.component.html',
  styleUrls: ['./rezerwacja.component.css'],
})
export class RezerwacjaComponent implements AfterViewInit {
  currentDate = new Date();
  today = new Date();
  selectedDate: string = '';
  selectedHour: string = '';
  peopleCount: number = 1;

  dayNames: string[] = ['Pn', 'Wt', 'Śr', 'Cz', 'Pt', 'Sb', 'Nd'];

  constructor(private rezerwacjaService: RezerwacjaService) {}

  ngAfterViewInit(): void {
    this.init();
  }

  init(): void {
    const calendarGrid = document.getElementById('calendarGrid')!;
    const monthYearLabel = document.getElementById('monthYear')!;
    const prevMonthBtn = document.getElementById(
      'prevMonth'
    ) as HTMLButtonElement;
    const nextMonthBtn = document.getElementById('nextMonth')!;

    const renderCalendar = () => {
      calendarGrid.innerHTML = '';

      const year = this.currentDate.getFullYear();
      const month = this.currentDate.getMonth();

      monthYearLabel.textContent = this.currentDate.toLocaleString('pl-PL', {
        month: 'long',
        year: 'numeric',
      });

      prevMonthBtn.disabled =
        month === this.today.getMonth() && year === this.today.getFullYear();

      this.dayNames.forEach((day) => {
        const dayElem = document.createElement('div');
        dayElem.textContent = day;
        dayElem.classList.add('day-name');
        calendarGrid.appendChild(dayElem);
      });

      const firstDay = new Date(year, month, 1);
      const startDay = (firstDay.getDay() + 6) % 7;
      const daysInMonth = new Date(year, month + 1, 0).getDate();

      for (let i = 0; i < startDay; i++) {
        const emptyCell = document.createElement('div');
        emptyCell.classList.add('inactive');
        calendarGrid.appendChild(emptyCell);
      }

      for (let day = 1; day <= daysInMonth; day++) {
        const cellDate = new Date(year, month, day);
        const cell = document.createElement('div');
        cell.textContent = day.toString();

        if (cellDate < new Date(this.today.setHours(0, 0, 0, 0))) {
          cell.classList.add('inactive');
        } else {
          cell.addEventListener('click', () => selectDate(cellDate, cell));
        }
        calendarGrid.appendChild(cell);
      }
    };

    const selectDate = (date: Date, cell: HTMLElement) => {
      this.selectedDate = date.toISOString().split('T')[0];
      document
        .querySelectorAll('#calendarGrid div')
        .forEach((el) => el.classList.remove('selected'));
      cell.classList.add('selected');
      this.showHours();
    };

    prevMonthBtn.addEventListener('click', () => {
      this.currentDate.setMonth(this.currentDate.getMonth() - 1);
      renderCalendar();
    });

    nextMonthBtn.addEventListener('click', () => {
      this.currentDate.setMonth(this.currentDate.getMonth() + 1);
      renderCalendar();
    });

    document.getElementById('plus')!.addEventListener('click', () => {
      if (this.peopleCount < 8) {
        this.peopleCount++;
        document.getElementById('count')!.textContent =
          this.peopleCount.toString();
      }
    });

    document.getElementById('minus')!.addEventListener('click', () => {
      if (this.peopleCount > 1) {
        this.peopleCount--;
        document.getElementById('count')!.textContent =
          this.peopleCount.toString();
      }
    });

    document.getElementById('confirm')!.addEventListener('click', () => {
      const summary = document.getElementById('summary')!;
      summary.innerHTML = `
        <h3>Podsumowanie rezerwacji:</h3>
        <p><strong>Data:</strong> ${this.selectedDate}</p>
        <p><strong>Godzina:</strong> ${this.selectedHour}</p>
        <p><strong>Ilość osób:</strong> ${this.peopleCount}</p>
      `;
      summary.classList.remove('hidden');

      this.rezerwacjaService.dodajRezerwacje({
        data: this.selectedDate,
        godzina: this.selectedHour,
        osoby: this.peopleCount,
      });
    });

    renderCalendar();
  }

  showHours(): void {
    const hoursDiv = document.getElementById('hours')!;
    hoursDiv.innerHTML = '';
    this.selectedHour = '';
    document.getElementById('confirm')!.classList.add('hidden');
    document.getElementById('people-selector')!.classList.remove('hidden');

    for (let h = 12; h <= 20; h++) {
      const hour = `${h}:00`;
      const btn = document.createElement('button');
      btn.textContent = hour;
      btn.dataset['hour'] = hour;
      btn.addEventListener('click', () => this.selectHour(btn));
      hoursDiv.appendChild(btn);
    }
  }

  selectHour(btn: HTMLElement): void {
    this.selectedHour = btn.dataset['hour']!;
    document
      .querySelectorAll('#hours button')
      .forEach((b) => b.classList.remove('selected'));
    btn.classList.add('selected');
    const confirmBtn = document.getElementById('confirm')!;
    confirmBtn.classList.remove('hidden');
    (confirmBtn as HTMLButtonElement).disabled = false;
  }
}
