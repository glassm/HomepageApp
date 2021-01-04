import { Component, Input, OnInit } from '@angular/core';
import { SensorService } from '../services/sensor.service';

@Component({
  selector: 'app-temp-humidity',
  templateUrl: './temp-humidity.component.html',
  styleUrls: ['./temp-humidity.component.css']
})
export class TempHumidityComponent implements OnInit {
  @Input() temp: number;
  @Input() humidity: number;

  tempF: string;
  tempC: string;
  rhumid: string;

  constructor(private sensorService: SensorService) { }

  ngOnInit(): void {
    const temp$ = this.sensorService.getTempHumidData();
    temp$.subscribe( data => {
      console.log(data);
      this.tempC = String(data.temp);
      this.tempF = String((data.temp * 1.8 + 32).toFixed(1));
      this.rhumid = String(data.humidity);
    });

  }

}
