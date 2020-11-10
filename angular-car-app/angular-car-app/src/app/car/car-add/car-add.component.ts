import { Component, OnInit } from '@angular/core';
import {CarService} from "../car.service";
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";


@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.scss']
})
export class CarAddComponent implements OnInit {

  carForm = new FormGroup({
    brand: new FormControl(''),
    carType: new FormControl(''),
    color: new FormControl('')
  });

  constructor(private carService: CarService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  save() {
    const car = this.carForm.value;
    this.carService.addCar(car)
      .subscribe(()   => {
        this.router.navigateByUrl('/cars');
      });
}
}
