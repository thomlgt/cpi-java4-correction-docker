import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cinema } from 'src/app/models/cinema';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  redirect = () => {
    let selectedCinema = JSON.parse(localStorage.getItem("selectedCinema"));
    if(selectedCinema != null) {
      this.router.navigateByUrl(`/cinema/${selectedCinema._id}/films`)
    } else {
      this.router.navigateByUrl("")
    }
  }

}
