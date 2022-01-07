import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Passenger } from 'src/app/Shared/Passenger';
import { PassengerService } from 'src/app/Shared/passenger.service';

@Component({
  selector: 'app-passenger-info',
  templateUrl: './passenger-info.component.html',
  styleUrls: ['./passenger-info.component.css']
})
export class PassengerInfoComponent implements OnInit {

  passengers: {id: number, name: string, lastName: string, origin: string, destination: string}[] =[];
  selectedTraveler!: Passenger;

  @Output() updateCustomer = new EventEmitter<Passenger>();

 constructor( private passengerService: PassengerService) { }

 ngOnInit(): void {
   this.passengers = this.passengerService.getPassengers();
 }

 updatePassenger(travelerId: any) {
   // return in eventEmit the selected customer
   this.selectedTraveler = this.passengerService.getPassenger(travelerId)!;
   this.updateCustomer.emit(this.selectedTraveler); // emit selected
 }

 deletePassenger(passengerId: number) {
  // return in eventEmit the selected customer
  this.passengerService.deletePassenger(passengerId);
}

}
