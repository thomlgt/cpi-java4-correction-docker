import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {

  ticket : String;

  constructor(
    private service : TicketService,
    private route : ActivatedRoute
    ) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params.id;
    this.service.findByIdAndImpress(id).subscribe(data => {
      this.ticket = data;
    })
  }

}
