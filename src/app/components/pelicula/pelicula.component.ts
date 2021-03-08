import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.scss']
})
export class PeliculaComponent implements OnInit {

  img = '';
  constructor() { }

  ngOnInit(): void {
    this.img = 'https://i.pinimg.com/236x/cd/3d/b2/cd3db2881015941b4e5f124344405727--disney-films-comic-book.jpg';
  }

}
