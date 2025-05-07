import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { SliderComponent } from './components/slider/slider.component';
import { LocationComponent } from './components/location/location.component';
import { FoundersComponent } from './components/founders/founders.component';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    SliderComponent,
    LocationComponent,
    FoundersComponent,
  ],
  selector: 'app-root',
  template: `
    <app-header></app-header>
    <main>
      <app-slider></app-slider>
      <app-location></app-location>
      <app-founders></app-founders>
    </main>
    <router-outlet></router-outlet>
  `,
  styles: [],
})
export class AppComponent {
  title = 'smaki-swiata';
}
