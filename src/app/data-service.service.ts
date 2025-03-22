import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(private http: HttpClient) {}
  private apiUrl = 'http://localhost:3000/devices';

  getData(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
