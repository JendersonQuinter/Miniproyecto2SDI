import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Pelicula } from './pelicula.interfaces';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DatosService {

  constructor(
    private http: HttpClient
  ) { }

  apiKey = 'b562c6fb00fd16f04c5e039a1bbb6511';

  getPeliculas(): Observable<Pelicula[]> {
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${this.apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`;
    return this.http.get<Pelicula[]>(url, {
      params: {
        peliculas: '8'
      }
    });
  }

  getPelicula(id: string): Observable<Pelicula> {
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${this.apiKey}&language=en-US`;
    return this.http.get<Pelicula>(url);
  }


}

