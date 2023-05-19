import { Component } from '@angular/core';
import { ThemeService } from 'src/app/theme.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  constructor(private themeService: ThemeService) {}

  changeTheme(theme: string) {
    this.themeService.switchTheme(theme);
  }
}
