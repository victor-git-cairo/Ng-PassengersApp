import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Passenger } from 'src/app/Shared/Passenger';
import { PassengerService } from 'src/app/Shared/passenger.service';

@Component({
  selector: 'app-passenger-details',
  templateUrl: './passenger-details.component.html',
  styleUrls: ['./passenger-details.component.css']
})
export class PassengerDetailsComponent implements OnInit {
  @Input() passengerInfo!: Passenger;
  @Output() hideUpdateForm = new EventEmitter<boolean>();

  constructor( private passengerService: PassengerService) { }
  
  ngOnInit(): void {  
  }

  updatePassenger(){
    this.passengerService.updatePassenger( {id: this.passengerInfo.id, name: this.passengerInfo.name,lastName: this.passengerInfo.lastName, origin: this.passengerInfo.origin, destination: this.passengerInfo.destination})
    this.hideUpdateForm.emit(false);
  }

}
