import { AuthService } from './../../servicios/auth.service';
import { Component, OnInit } from '@angular/core';
import firebase from 'firebase';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  activar = false;

  user: firebase.User = null;

  constructor(public authService: AuthService) {}

  ngOnInit(): void {
    // tslint:disable-next-line: deprecation
    this.authService.getCurrentUser().subscribe((user) => {
      this.user = user;
    });
  }

  Logout(): void {
    this.authService.LogoutGoogle();
  }

  Activacion(): void {
    this.activar = !this.activar;
  }

  LoginGoogle(): void {
    this.authService.loginWithGoogle();
  }
}
