import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { StorageService } from '../services/localStorage';

@Component({
  selector: 'app-home',
  imports: [CommonModule, ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  showBanner: boolean = true;

  ngOnInit() {
    const savedValue = localStorage.getItem('showBanner');
    if (savedValue !== null) {
      this.showBanner = savedValue === 'true';
    }
  }

  alterShowBanner() {
    this.showBanner = !this.showBanner;
    localStorage.setItem('showBanner', this.showBanner.toString());
  }
}
