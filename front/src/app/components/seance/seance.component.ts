import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Seance } from 'src/app/models/seance';
import { Ticket } from 'src/app/models/ticket';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-seance',
  templateUrl: './seance.component.html',
  styleUrls: ['./seance.component.css']
})
export class SeanceComponent implements OnInit {

  @Input() seance : Seance; 

  constructor(
    private ticketService : TicketService,
    private router : Router,
    private modalService : NgbActiveModal
    ) { }

  ngOnInit(): void {
  }

  reserver = (seance : Seance) => {
    let ticket = new Ticket();
    ticket.seance = seance;
    this.ticketService.create(ticket).subscribe(data => {
      this.closeModal();
      this.router.navigate([`reservation/${data._id}`]);
    })
  }

  closeModal() {
    const modalRef = this.modalService.close();
  }

}
