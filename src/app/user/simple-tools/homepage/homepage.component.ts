import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent {
  constructor(private router: Router) {}

  toolsChange($event) {
    console.log($event);
  }

  redirectToService(serviceName) {
    if (serviceName === 'currency-converter') {
      this.router.navigateByUrl('/currency-converter');
    } else if (serviceName === 'world-ranking') {
      this.router.navigateByUrl('/world-ranking');
    }
    else if (serviceName === 'chat-gpt') {
      this.router.navigateByUrl('/chat-gpt');
    }
  }
}
