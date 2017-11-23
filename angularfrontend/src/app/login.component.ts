import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
    selector: 'login',
    template: `
    <mat-card>
    <mat-card-header>
        <mat-card-title>
           <h4 style="text-align:center;">Login</h4>
        </mat-card-title>
    </mat-card-header>
    <mat-card-content>
        <form>
        <mat-input-container style="display:block;">
            <input  name="email" [(ngModel)]="loginData.email" matInput placeholder="email" type="email" />
        </mat-input-container>
        <mat-input-container style="display:block;">
            <input  name="password" [(ngModel)]="loginData.pwd" matInput placeholder="password" type="password" />
        </mat-input-container>
            <button (click)="post()" mat-raised-button color="primary">Login</button>
            </form>
    </mat-card-content>
    </mat-card>
  `
})
export class LoginComponent {

    constructor(private authService:AuthService){}

    loginData = {};

    post() {
        this.authService.loginUser(this.loginData);

    }
}
