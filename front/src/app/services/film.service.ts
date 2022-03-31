import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Film } from '../models/film';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  constructor(private http : HttpClient) { }

  findDistincByCinemaId = (id : String) : Observable<Film[]> => {
    return this.http.get<Film[]>(`${environment.apiUrl}/films/cinemas/${id}`);
  }

  findAll = () => {
    return this.http.get<Film[]>(`${environment.apiUrl}/films/`);
  }
}
