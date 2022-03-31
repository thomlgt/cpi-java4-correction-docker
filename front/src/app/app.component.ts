import { Component } from '@angular/core';
import { CinemaService } from './services/cinema.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'express-gaumont';

  constructor(
    public cinemaService : CinemaService
  ) {}
}
