import { Component, OnInit } from '@angular/core';
import { Passenger } from '../Shared/Passenger';

@Component({
  selector: 'app-passengers',
  templateUrl: './passengers.component.html',
  styleUrls: ['./passengers.component.css']
})
export class PassengersComponent implements OnInit {

  selectedPassenger!: Passenger;
  toggleUpdateForm: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  customerUpdate(passenger:Passenger) {
    //assign the emitted value to selectedTraveler - https://www.javascripttutorial.net/object/3-ways-to-copy-objects-in-javascript/
    this.selectedPassenger = Object.assign({}, passenger);  // assign 
    this.toggleUpdateForm = true;
    console.log(this.selectedPassenger);
  }
   
  toggleUpdateDialog(state: boolean) {
    this.toggleUpdateForm = state;
  }  
}
