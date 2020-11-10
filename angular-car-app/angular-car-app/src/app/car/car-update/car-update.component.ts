import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CarService} from "../car.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-car-update',
  templateUrl: './car-update.component.html',
  styleUrls: ['./car-update.component.scss']
})
export class CarUpdateComponent implements OnInit {

  id: number;
  carForm = new FormGroup({
    brand: new FormControl(''),
    carType: new FormControl(''),
    color: new FormControl('')
  });

  constructor(private route: ActivatedRoute,
              private carService: CarService,
              private router: Router) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.carService.getCarById(this.id)
      .subscribe(carFromRest => {
    this.carForm.patchValue({
      brand: carFromRest.brand,
      carType: carFromRest.carType,
      color: carFromRest.color,
      });
    });
  }
  save() {
    const car = this.carForm.value;
    car.id = this.id;
    this.carService.updateCar(car)
      .subscribe(() => {
        this.router.navigateByUrl('/cars');
      })
  }
}
