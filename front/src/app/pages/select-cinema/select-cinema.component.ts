import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { Cinema } from 'src/app/models/cinema';
import { CinemaService } from 'src/app/services/cinema.service';

@Component({
  selector: 'app-select-cinema',
  templateUrl: './select-cinema.component.html',
  styleUrls: ['./select-cinema.component.css']
})
export class SelectCinemaComponent implements OnInit {

  public cinemas : Cinema[] = [];

  constructor(
    private service : CinemaService,
    private router : Router
    ) {
      this.service.isCinemaSelected = false;
    }

  ngOnInit(): void {
    this.service.findAll().subscribe(data => {
      this.cinemas = data;
    })
  }

  goToAccueilCinema(cinema : Cinema) {
    localStorage.setItem("selectedCinema", JSON.stringify(cinema));
    this.service.isCinemaSelected = true;
    this.router.navigate([`cinema/${cinema._id}/films`]);
  }

}
