import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cinema } from 'src/app/models/cinema';
import { Film } from 'src/app/models/film';
import { CinemaService } from 'src/app/services/cinema.service';
import { FilmService } from 'src/app/services/film.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {

  films : Film[] = [];
  cinemas : Cinema[] = [];
  selectedCinema : Cinema;

  constructor(
    private filmService : FilmService,
    private cinemaService : CinemaService,
    private router : Router
    ) { }

  ngOnInit(): void {
    //Récupérer le JSON du cinema enregistré
    this.selectedCinema = JSON.parse(localStorage.getItem("selectedCinema"));
    //Transformer le JSON du cinema enregistré en Cinema

    this.initFilmList();

    this.initCinemaList();
  }

  changeSelectedCinema = (cinema : Cinema) => {
    this.selectedCinema = cinema;
    localStorage.setItem("selectedCinema", JSON.stringify(cinema));
    this.router.navigateByUrl(`cinema/${cinema._id}/films`);
    this.initFilmList();
  }

  initFilmList = () => {
    this.filmService.findDistincByCinemaId(this.selectedCinema._id).subscribe(data => {
      this.films = data;
    })
  }

  initCinemaList = () => {
    this.cinemaService.findAll().subscribe(data => {
      this.cinemas = data;
    })
  }

}
