import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { ContactService } from '../../../core/services/contact/contact.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent implements OnInit {
  contactForm!: FormGroup; // Using '!' to tell TypeScript this will be initialized
  formMessage: string = ''; // To display success or error messages

  constructor(
    private fb: FormBuilder,
    private contactService: ContactService,
    private messageService: NzMessageService,
  ) {}

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      subject: ['', [Validators.required]],
      message: ['', [Validators.required]],
    });
  }

  // Handle form submission
  onSubmit(): void {
    if (this.contactForm.valid) {
      const formData = this.contactForm.value;

      this.contactService.submitContactMessage(formData).subscribe({
        next: (response) => {
          this.formMessage = 'Your message has been sent successfully!';
          this.messageService.success(this.formMessage);
          this.contactForm.reset();
        },
        error: (error) => {
          this.formMessage =
            'There was an error sending your message. Please try again.';
          this.messageService.error(this.formMessage);
        },
      });
    } else {
      this.formMessage = 'Please fill in all the required fields.';
    }
  }
}
