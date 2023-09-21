import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactEmailService {

  private apiUrl = 'http://192.168.1.51:8080';

  constructor(private http: HttpClient) { }

  sendEmail(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/send-email`, data);
  }
}

