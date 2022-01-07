import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { PassengerDetailsComponent } from './Passengers/passenger-details/passenger-details.component';
import { PassengersComponent } from './Passengers/passengers.component';
import { PassengerInfoComponent } from './Passengers/passenger-info/passenger-info.component';
import { PassengerEditComponent } from './Passengers/passenger-edit/passenger-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    PassengersComponent,
    PassengerDetailsComponent,
    PassengerInfoComponent,
    PassengerEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
