import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface IEmailSummary {
  id: string 
  subject: string 
  from: string
}

export interface IEmail {
  id: string 
  subject: string 
  text: string 
  to: string 
  html: string
  from: string
}

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  url = 'https://api.angular-email.com'

  constructor(private http: HttpClient) { }

  getEmails() {
    return this.http.get<IEmailSummary[]>(this.url + '/emails');
  }
  
  getEmail(id: string) {
    return this.http.get<IEmail>(this.url + '/emails/' + id);

  }

  sendEmail() {}
}
