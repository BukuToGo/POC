import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-card',
  imports: [],
  templateUrl: './main-card.component.html',
  styleUrl: './main-card.component.scss'
})
export class MainCardComponent {
  constructor(private router: Router) {}

  navigateToDetails() {
    const offerId = 1; // Replace with dynamic ID when integrating API
    this.router.navigate(['/offer', offerId]);
  }
}
