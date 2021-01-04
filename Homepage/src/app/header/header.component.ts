import { Component, OnInit } from '@angular/core';
import { SensorService } from '../services/sensor.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = 'Glass Homepage';
  constructor() { }

  ngOnInit(): void {
  }

}
