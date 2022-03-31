import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cinema } from '../models/cinema';

@Injectable({
  providedIn: 'root'
})
export class CinemaService {

  public isCinemaSelected : boolean = true;

  constructor(private http : HttpClient) { }

  findAll = () : Observable<Cinema[]> => {
    return this.http.get<Cinema[]>(`${environment.apiUrl}/cinemas`);
  }
}
