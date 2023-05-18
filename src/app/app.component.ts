import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AuthService } from './shared/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  items: MenuItem[];

  sidebarVisible: boolean = false;

  title = 'helping.tools';

  userOptions = [
    { name: 'Profile', code: 'profile' },
    { name: 'Log Out', code: 'logout' },
  ];

  constructor(private router: Router, private authService: AuthService) {}

  isLoggedIn() {
    return this.authService.isLoggedIn;
  }

  @ViewChild('op') overLayProfile;

  userOptionSelect($event) {
    this.overLayProfile.hide();
    switch ($event?.value?.code) {
      case 'profile':
        this.router.navigateByUrl('/profile');
        break;
      case 'logout':
        this.authService.SignOut();
        this.router.navigateByUrl('');
        break;
      default:
        break;
    }
  }

  ngOnInit() {
    this.items = [
      {
        icon: 'pi pi-bars',
        command: (event?: any) => this.menuClick(event),
      },
      {
        label: 'Home',
        icon: 'pi pi-home',
        command: (event?: any) => this.menuClick(event),
      },
      {
        label: 'Services',
        icon: 'pi pi-desktop',
        command: (event?: any) => this.menuClick(event),
      },
      {
        label: 'Innovate',
        icon: 'pi pi-file-edit',
        command: (event?: any) => this.menuClick(event),
      },
    ];
  }
  menuClick($event) {
    if ($event.item.icon === 'pi pi-bars') {
      this.sidebarVisible = true;
    } else if ($event.item.label === 'Services') {
      this.router.navigateByUrl('/dashboard');
    } else if ($event.item.label === 'Home') {
    } else if ($event.item.label === 'Innovate') {
    }
  }

  redirectToProfile() {
    this.router.navigateByUrl('/dashboard/profile');
  }
  modelChange($event) {
    console.log($event);
  }
}
