import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FounderItemComponent } from '../founder-item/founder-item.component';

// Eksportuj interfejs
export interface Founder {
  name: string;
  position: string;
  image: string;
  description: string;
}

@Component({
  standalone: true,
  imports: [CommonModule, FounderItemComponent],
  selector: 'app-founders',
  templateUrl: './founders.component.html',
})
export class FoundersComponent {
  founders: Founder[] = [
    {
      name: 'Mateusz Biernacki',
      position: 'Szef Kuchni',
      image: 'mb.jpg',
      description: 'Z pasją łączy tradycję z nowoczesnością...',
    },
    // ... pozostali członkowie zespołu
  ];
}
