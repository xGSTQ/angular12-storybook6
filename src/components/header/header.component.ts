import {Component, Input} from '@angular/core';
import {ThemeService} from "../../services/theme.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private themeService: ThemeService) {}

  @Input() slogan = '';
  @Input() isFullWidth = false;

  getTheme() {
    return this.themeService.getTheme();
  }

  getLogoColor(brandNumber: number): string {
    const theme = this.getTheme();
    switch (theme) {
      case 'light':
        switch (brandNumber) {
          case 1:
            return 'var(--logo-primary-light)';
          case 2:
            return 'var(--logo-secondary-light)';
          case 3:
            return 'var(--logo-tertiary-light)';
          default:
            return '';
        }
      case 'dark':
        switch (brandNumber) {
          case 1:
            return 'var(--logo-primary-dark)';
          case 2:
            return 'var(--logo-secondary-dark)';
          case 3:
            return 'var(--logo-tertiary-dark)';
          default:
            return '';
        }
      default:
        return '';
    }
  }
}
