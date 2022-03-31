import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Seance } from '../models/seance';
import { Ticket } from '../models/ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  HTTPOptions:Object = {
    responseType: 'text'
  }

  constructor(private http : HttpClient) { }

  create = (ticket : Ticket) : Observable<Ticket> => {
    return this.http.post<Ticket>(`${environment.apiUrl}/tickets`, ticket);
  }

  findById= (id : String) : Observable<Ticket> => {
    return this.http.get<Ticket>(`${environment.apiUrl}/tickets/${id}`);
  }

  findByIdAndImpress = (id : String) : Observable<String> => {
    return this.http.get<String>(`${environment.apiUrl}/tickets/${id}/impression`, this.HTTPOptions);
  }
}
