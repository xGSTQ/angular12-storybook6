import {Component, EventEmitter, Output} from '@angular/core';
import {ThemeService} from "../../services/theme.service";

@Component({
  selector: 'app-theme-toggle',
  templateUrl: './theme-toggle.component.html',
  styleUrls: ['./theme-toggle.component.scss']
})
export class ThemeToggleComponent {

  @Output() themeChanged: EventEmitter<string> = new EventEmitter();

  constructor(private themeService: ThemeService) { }

  getTheme() {
    return this.themeService.getTheme();
  }

  toggleTheme() {
    this.themeService.toggleTheme();
    // Emit the theme state for future use
    this.themeChanged.emit(this.getTheme());
  }
}
