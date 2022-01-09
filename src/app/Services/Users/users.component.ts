import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { getSafePropertyAccessString } from '@angular/compiler';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

@Injectable()
export class UsersComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

    this.http.get<any>('https://catfact.ninja/facts').subscribe(response => {
      console.log(response.data)
    });
  }

  getCatFacts() {
    this.http.get<any>('https://catfact.ninja/facts').subscribe(response => {
      console.log(response.data)
    });
  }
}

