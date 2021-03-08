import { Component, OnInit } from '@angular/core';
import firebase from 'firebase';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.scss']
})
export class PeliculaComponent implements OnInit {

  img = '';
  activador = false;
  user: firebase.User = null;

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
    this.img = 'https://i.pinimg.com/236x/cd/3d/b2/cd3db2881015941b4e5f124344405727--disney-films-comic-book.jpg';
    // tslint:disable-next-line: deprecation
    this.authService.getCurrentUser().subscribe((user) => {
    this.user = user;
    });
  }

  mostrarDetalles(): void {
    this.activador = !this.activador;
  }

}
