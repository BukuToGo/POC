import { Component } from '@angular/core';
import { MainCardComponent } from "../main-card/main-card.component";

@Component({
  selector: 'app-home',
  imports: [MainCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
