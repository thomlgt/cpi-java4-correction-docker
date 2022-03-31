import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CinemaComponent } from './pages/cinema/cinema.component';
import { FilmsComponent } from './components/films/films.component';
import { SelectCinemaComponent } from './pages/select-cinema/select-cinema.component';
import { ReservationComponent } from './pages/reservation/reservation.component';
import { AdministrationComponent } from './pages/administration/administration.component';
import { TicketComponent } from './pages/ticket/ticket.component';

const routes: Routes = [
  { path : "", component : SelectCinemaComponent },
  { path : "cinema/:id", component : CinemaComponent, 
      children : [
      { path : "films", component : FilmsComponent}
    ]
  },
  { path : "reservation/:id", component : ReservationComponent},
  { path : "ticket/:id", component : TicketComponent},
  { path : "admin", component : AdministrationComponent},
  { path : "**", redirectTo : ""}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
