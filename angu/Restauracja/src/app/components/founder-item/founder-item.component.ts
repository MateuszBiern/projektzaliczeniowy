import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Founder } from '../founders/founders.component'; // Teraz poprawnie zaimportowany

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-founder-item',
  templateUrl: './founder-item.component.html',
})
export class FounderItemComponent {
  @Input() founder!: Founder;
}
