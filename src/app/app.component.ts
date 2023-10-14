import {Component, OnInit} from '@angular/core';
import { ThemeService } from 'src/services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private themeService: ThemeService) {}

  // Header
  headerSlogan: string = 'Custom Header works!';
  theme = 'light';

  ngOnInit() {
    // console.log('Theme on initialization:', this.themeService.getTheme());
  }

  // Theme Toggle
  getTheme() {
    // console.log('Toggled theme:', this.themeService.getTheme());
    return this.themeService.getTheme();
  }
}
