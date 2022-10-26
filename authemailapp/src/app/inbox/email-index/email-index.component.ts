import { Component, OnInit } from '@angular/core';
import { EmailService, IEmailSummary } from '../email.service';

@Component({
  selector: 'app-email-index',
  templateUrl: './email-index.component.html',
  styleUrls: ['./email-index.component.scss']
})
export class EmailIndexComponent implements OnInit {
  emails: IEmailSummary[] = []
  constructor(private emailService: EmailService) { }

  ngOnInit(): void {
    this.emailService.getEmails().subscribe((val) => {
      this.emails = val;
    })
  }


}
