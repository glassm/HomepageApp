import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LinkDto } from '../model/LinkDto';

@Injectable({
  providedIn: 'root'
})
export class LinkService {

  constructor(private http: HttpClient) { }

  public getLinkDtos(): Observable<LinkDto[]> {
      return this.http.get<LinkDto[]>('http://localhost:3080/links');
  }
}
