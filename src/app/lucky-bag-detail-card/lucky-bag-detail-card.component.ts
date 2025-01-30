import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-lucky-bag-detail-card',
  imports: [],
  templateUrl: './lucky-bag-detail-card.component.html',
  styleUrl: './lucky-bag-detail-card.component.scss'
})
export class LuckyBagDetailCardComponent {
  offerId!: number;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    // Get the offer ID from the route parameters
    this.offerId = Number(this.route.snapshot.paramMap.get('id'));
    // Fetch offer details from the backend (placeholder logic for now)
    console.log(`Fetching details for offer ID: ${this.offerId}`);
  }

  goBack(): void {
    this.router.navigate(['/home']);
  }
}
