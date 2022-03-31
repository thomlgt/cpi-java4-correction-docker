import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ticket } from 'src/app/models/ticket';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  ticket : Ticket;

  constructor(
    private route  :ActivatedRoute,
    private service : TicketService,
    private router : Router
    ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.service.findById(params.get("id")).subscribe(data => {
        this.ticket = data;
      })
    });
  }

  generateTicket = () => {
    this.router.navigateByUrl(`/ticket/${this.ticket._id}`)
  }

}
