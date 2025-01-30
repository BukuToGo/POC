import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';
import { LuckyBagDetailCardComponent } from './lucky-bag-detail-card/lucky-bag-detail-card.component';

export const routes: Routes = [
  {
    path: '',
    component: MainComponent, // Wrap these routes with MainComponent
    children: [
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      // { path: 'filter-bags', component: FilterBagsComponent },
      // { path: 'geo-bags', component: GeoBagsComponent },
      // { path: 'profile', component: ProfileComponent },
      { path: 'offer/:id', component: LuckyBagDetailCardComponent }
    ]
  },
  // { path: '', redirectTo: 'home', pathMatch: 'full' }, // Redirect empty path to /home
  // { path: 'home', loadComponent: () => import('./app.component').then(m => m.AppComponent) },
  // { path: '**', redirectTo: 'home' } // Wildcard route for 404
];
