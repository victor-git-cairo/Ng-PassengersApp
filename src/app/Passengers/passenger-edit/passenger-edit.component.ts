import { Component, OnInit } from '@angular/core';
import { Passenger } from 'src/app/Shared/Passenger';
import { PassengerService } from 'src/app/Shared/passenger.service';

@Component({
  selector: 'app-passenger-edit',
  templateUrl: './passenger-edit.component.html',
  styleUrls: ['./passenger-edit.component.css']

})
export class PassengerEditComponent implements OnInit {
  newPassenger: Passenger = {
    id: 0,
    name: "",
    lastName: "",
    origin: "",
    destination: "",
  };

  constructor(private passengerService: PassengerService) { }

  ngOnInit(): void {
  }

  addPassenger() {
    console.log(this.newPassenger);
    this.passengerService.addPassenger(this.newPassenger);
  }
}
