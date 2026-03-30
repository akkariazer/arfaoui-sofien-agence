import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { QuoteRequestComponent } from './pages/quote-request/quote-request.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'devis',
    component: QuoteRequestComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];
