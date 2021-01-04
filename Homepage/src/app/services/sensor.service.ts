import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { TempHumid } from '../model/temp-humid';

@Injectable({
  providedIn: 'root'
})
export class SensorService {

  constructor(private http: HttpClient) { }

  public getTempHumidData(): Observable<TempHumid> {
    return this.http.get<TempHumid>('http://localhost:3080/data/temp');
  }
}
