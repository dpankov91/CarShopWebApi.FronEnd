import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  title = 'Welcome to Car Shop "Auto Paradise"';
  constructor() { }

  ngOnInit(): void {
  }

}
