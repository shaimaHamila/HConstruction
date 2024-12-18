// src/app/contact.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private apiUrl = 'http://localhost:6001/api/v1/contact'; // Your backend API URL

  constructor(private http: HttpClient) {}
  // Helper function to get the token from localStorage
  private getAuthHeaders(): HttpHeaders {
    const token = localStorage.getItem('accessToken'); // Get token from localStorage
    let headers = new HttpHeaders();

    if (token) {
      // If token exists, add it to the headers
      headers = headers.set('Authorization', 'Bearer ' + token);
    }

    return headers;
  }
  // Submit a contact message
  submitContactMessage(contactData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, contactData); // POST request to send data to backend
  }

  // Get all contact messages
  getContactMessages(): Observable<any> {
    const headers = this.getAuthHeaders();
    return this.http.get<any>(this.apiUrl, { headers }); // GET request to fetch contact messages
  }

  // Delete a contact message
  deleteContactMessage(contactId: string): Observable<any> {
    const headers = this.getAuthHeaders();

    return this.http.delete<any>(`${this.apiUrl}/${contactId}`, { headers }); // DELETE request to delete a message
  }
}
