import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Cinema } from 'src/app/models/cinema';
import { Film } from 'src/app/models/film';
import { Seance } from 'src/app/models/seance';
import { SeanceService } from 'src/app/services/seance.service';

@Component({
  selector: 'app-seances',
  templateUrl: './seances.component.html',
  styleUrls: ['./seances.component.css']
})
export class SeancesComponent implements OnInit {

  @Input() film : Film;
  public seances : Seance[];

  constructor(
    public activeModal: NgbActiveModal,
    private service : SeanceService
    ) { }

  ngOnInit(): void {
    let cinema : Cinema = JSON.parse(localStorage.getItem("selectedCinema"))
    this.service.findByFilmAndCinema(this.film, cinema).subscribe(data => {
      this.seances = data;
    })
  }

}
