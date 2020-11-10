import { Component, OnInit } from '@angular/core';
import {Car} from "../car";
import {CarService} from "../car.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss']
})
export class CarListComponent implements OnInit {
  cars$: Observable<Car[]>;
  cars: Car[];

  constructor(private carService: CarService) { }

  ngOnInit(): void {
    this.refresh();
  }

  refresh(): void{
    this.carService.getAllCars()
      .subscribe(listOfCars => {
    this.cars = listOfCars;
      });
  }


  delete(id: number) {
    this.carService.deleteCar(id)
      .subscribe(message => {
        console.log('Deleted user, got message:' + message);
        this.refresh();
      });
  }
}
