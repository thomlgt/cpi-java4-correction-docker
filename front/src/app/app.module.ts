import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SelectCinemaComponent } from './pages/select-cinema/select-cinema.component';
import { FilmComponent } from './components/film/film.component';
import { FilmsComponent } from './components/films/films.component';
import { CinemaComponent } from './pages/cinema/cinema.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SeancesComponent } from './components/seances/seances.component';
import { SeanceComponent } from './components/seance/seance.component';
import { ReservationComponent } from './pages/reservation/reservation.component';
import { AdministrationComponent } from './pages/administration/administration.component';
import { AdminFilmComponent } from './components/admin/admin-film/admin-film.component';
import { AdminSeanceComponent } from './components/admin/admin-seance/admin-seance.component';
import { AdminCinemaComponent } from './components/admin/admin-cinema/admin-cinema.component';
import { AdminSalleComponent } from './components/admin/admin-salle/admin-salle.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TicketComponent } from './pages/ticket/ticket.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SelectCinemaComponent,
    FilmComponent,
    FilmsComponent,
    CinemaComponent,
    SeancesComponent,
    SeanceComponent,
    ReservationComponent,
    AdministrationComponent,
    AdminFilmComponent,
    AdminSeanceComponent,
    AdminCinemaComponent,
    AdminSalleComponent,
    TicketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
