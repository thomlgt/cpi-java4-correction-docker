import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbPanelChangeEvent } from '@ng-bootstrap/ng-bootstrap';
import { Film } from 'src/app/models/film';
import { FilmService } from 'src/app/services/film.service';

@Component({
  selector: 'app-admin-film',
  templateUrl: './admin-film.component.html',
  styleUrls: ['./admin-film.component.css']
})
export class AdminFilmComponent implements OnInit {

  films : Film[];
  filmForm : FormGroup;

  constructor(
    private service : FilmService,
    private fb : FormBuilder
    ) { 
      this.filmForm = this.fb.group({
        nom : "",
        duree : 0
      })
    }

  ngOnInit(): void {
    this.initFilms();
  }

  initFilms = () => {
    this.service.findAll().subscribe(data => {
      this.films = data;
    })
  }

  ajouterFilm = () => {
    
  }

}
