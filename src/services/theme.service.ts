import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ThemeService {
  private readonly localStorageKey = 'theme';
  private currentTheme: string;

  constructor() {
    // Retrieve the user's theme preference from local storage on service initialization
    this.currentTheme = localStorage.getItem(this.localStorageKey) || 'light';
  }

  getTheme() {
    return this.currentTheme;
  }

  toggleTheme() {
    this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
    // Store the user's updated theme preference in local storage
    localStorage.setItem(this.localStorageKey, this.currentTheme);
  }
}
