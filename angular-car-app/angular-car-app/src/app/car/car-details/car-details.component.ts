import { Component, OnInit } from '@angular/core';
import {Car} from "../car";
import {CarService} from "../car.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.scss']
})
export class CarDetailsComponent implements OnInit {
  car: Car;
  constructor(private route: ActivatedRoute,
              private carService: CarService) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.carService.getCarById(id)
      .subscribe(carFromRest => {
      this.car = carFromRest
      });
  }
}
