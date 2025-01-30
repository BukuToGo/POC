import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "../navbar/navbar.component";
import { HomeComponent } from "../home/home.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main',
  imports: [NavbarComponent, RouterOutlet, HomeComponent, CommonModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
