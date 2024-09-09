import { Component, HostBinding, OnInit, inject,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, map, shareReplay } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatToolbarModule,
    MatSidenavModule,MatButtonModule,MatIconModule,MatGridListModule,AsyncPipe,

    MatListModule,


  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppComponent implements OnInit {
  private breakpointObserver = inject(BreakpointObserver);

  @HostBinding('class')
  currentTheme: 'light-theme' | 'dark-theme' = 'light-theme';
  isDarkMode: boolean = false;

  ngOnInit(): void {
    this.currentTheme =
      localStorage.getItem('theme') == 'dark-theme'
        ? 'dark-theme'
        : 'light-theme';
    this.isDarkMode = this.currentTheme == 'dark-theme';
  }

  onThemeChanged() {
    this.isDarkMode = !this.isDarkMode;
    if (this.isDarkMode) {
      this.currentTheme = 'dark-theme';
    } else {
      this.currentTheme = 'light-theme';
    }
    localStorage.setItem('theme', this.currentTheme);
  }

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );
}