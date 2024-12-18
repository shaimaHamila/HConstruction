import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private apiUrl = 'http://localhost:6001/api/v1/contact'; // Your backend API URL

  constructor(private http: HttpClient) {}

  // Method to submit a contact message
  submitContactMessage(contactData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, contactData); // POST request to send data to backend
  }

  // Method to get all contact messages (if needed)
  getContactMessages(): Observable<any> {
    return this.http.get<any>(this.apiUrl); // GET request to fetch contact messages from backend
  }
}
