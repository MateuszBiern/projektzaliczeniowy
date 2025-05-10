import { Routes } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { RezerwacjaComponent } from './rezerwacja/rezerwacja.component';

export const routes: Routes = [
  {
    path: '',
    component: BodyComponent,
  },
  {
    path: 'body',
    component: BodyComponent,
  },
  {
    path: 'rezerwacja',
    component: RezerwacjaComponent,
  },
];
