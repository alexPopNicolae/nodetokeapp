import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  template:`
  <mat-toolbar>
  PSSocial
  <span style="flex:1 1 auto"></span>
  <button mat-button routerLink="/users">Users</button>
  <button mat-button routerLink="/login">Login</button>
  <button mat-button routerLink="/register">Register</button>
  </mat-toolbar>
  <router-outlet></router-outlet>
  `
})
export class AppComponent {
  
  title = 'Hello world from angular 4';
}
