import { Injectable } from '@angular/core';
import {Car} from "./car";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {AuthenticationService} from "../authentication/authentication.service";
import {environment} from "../../environments/environment";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl: string = 'https://localhost:44325/api/car';

  constructor(private http: HttpClient, private authService: AuthenticationService) {}

  getAllCars(): Observable<Car[]> {
    // add authorization header with jwt token
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'Bearer ' + this.authService.getToken());

    return this.http.get<Car[]>(environment.apiUrl + '/todo/', httpOptions);
  }

  addCar(car: Car): Observable<Car>{
    return this.http.post<Car>(this.apiUrl, car);
  }

  getCarById(id: number): Observable<Car>{
    return this.http.get<Car>(this.apiUrl + '/' + id);
  }

  updateCar(car: Car): Observable<Car> {
    return this.http.put<Car>(this.apiUrl + '/' + car.id, car);
  }

  deleteCar(id: number): Observable<any> {
    return this.http.delete(this.apiUrl + '/' + id);
  }
}
