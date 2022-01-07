import { Injectable } from '@angular/core';
import { Passenger } from './Passenger';

@Injectable({
  providedIn: 'root'
})
export class PassengerService {
  private passengers = [
    {
      id: 1,
      name: 'Albert',
      lastName: 'Rodriguez',
      origin: 'Cleveland',
      destination: 'Miami, FL'
    },
    {
      id: 2,
      name: 'Santiago',
      lastName: 'Martinez',
      origin: 'NY',
      destination: 'Houston, TX'
    },
    {
      id: 3,
      name: 'Joann',
      lastName: 'Smith',
      origin: 'Los Angeles',
      destination: 'Austin,TX'
    },
    {
      id: 4,
      name: 'Ernest',
      lastName: 'McCarthy',
      origin: 'Seatle', 
      destination: 'Las Vegas, NV'
    },
    {
      id: 5,
      name: 'Mario',
      lastName: 'Montes',
      origin: 'Phoenix',
      destination: 'Jacksonville,FL'
    }
  ];

  constructor() { }

  getPassengers() {
    return this.passengers
  }

  getPassenger(id: number) {
    const customer = this.passengers.find(
      (s) => {
        return s.id === id;
      }
    );
    return customer;
  }

  updatePassenger(passengerInformation: {id:number, name: string, lastName: string, origin: string, destination: string}) {
    const customer = this.passengers.find(
      (s) => {
        return s.id === passengerInformation.id;
      }
    );
    if (customer) {
      customer.id = passengerInformation.id;
      customer.name = passengerInformation.name;
      customer.lastName = passengerInformation.lastName;
      customer.origin = passengerInformation.origin;      
      customer.destination = passengerInformation.destination;
    }
  }

  addPassenger( passenger: Passenger){
    this.passengers.push(passenger);
  }

  deletePassenger(id: number) {
    const passenger = this.passengers.find(
      (s) => {
        return s.id === id;
      }
    );
    if (passenger) {
     console.log('this element will be removed');     
    }
  }
}
