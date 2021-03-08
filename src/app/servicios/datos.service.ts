import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DatosService {

  constructor() { }
  urlApi = 'https://api.themoviedb.org/3/discover/movie?api_key=b562c6fb00fd16f04c5e039a1bbb6511&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1'




}

