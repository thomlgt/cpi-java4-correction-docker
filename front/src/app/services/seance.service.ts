import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cinema } from '../models/cinema';
import { Film } from '../models/film';
import { Seance } from '../models/seance';

@Injectable({
  providedIn: 'root'
})
export class SeanceService {

  constructor(private http : HttpClient) { }

  findByFilmAndCinema = (film : Film, cinema : Cinema) : Observable<Seance[]> => {
    return this.http.get<Seance[]>(`${environment.apiUrl}/seances/films/${film._id}/cinemas/${cinema._id}`);
  }
}
