import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { ContactService } from '../../../core/services/contact/contact.service';
export interface Contact {
  id: number;
  name: string;
  email: string;
  subject: string;
  message: string;
  phone: string;
  createdAt: string; // You may want to use `Date` instead of `string` if you plan to manipulate dates
}
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  visible = false; // For view drawer
  editVisible = false; // For edit drawer
  selectedContact: Contact | null = null; // Selected contact for viewing/editing
  dataSet: Contact[] = []; // Typed dataSet array to hold the contact data

  constructor(
    private message: NzMessageService,
    private contactService: ContactService, // Inject the service
  ) {}

  ngOnInit(): void {
    this.loadContacts(); // Load contacts on component initialization
  }

  loadContacts(): void {
    this.contactService.getContactMessages().subscribe(
      (response) => {
        if (response.succss) {
          this.dataSet = response.data; // Type-safe assignment
        }
      },
      (error) => {
        this.message.error('Failed to load messages');
      },
    );
  }

  // Show the contact details in the view drawer
  onView(contact: Contact) {
    this.selectedContact = contact;
    this.visible = true;
  }

  // Close the view drawer
  closeViewDrawer(): void {
    this.visible = false;
  }

  // Open the edit drawer with the selected contact
  onEdit(contact: Contact) {
    this.selectedContact = { ...contact }; // Create a copy to prevent direct mutation
    this.editVisible = true;
  }

  // Close the edit drawer
  closeEditDrawer(): void {
    this.editVisible = false;
  }

  // Save the edited contact
  onSaveEdit(): void {
    this.contactService.submitContactMessage(this.selectedContact).subscribe(
      (response) => {
        this.message.success('Message updated successfully');
        this.loadContacts(); // Reload the list after saving
        this.closeEditDrawer();
      },
      (error) => {
        this.message.error('Failed to update the message');
      },
    );
  }

  // Delete a contact message
  onDelete(contact: Contact) {
    this.contactService.deleteContactMessage(contact?.id.toString()).subscribe(
      (response) => {
        this.message.success('Message deleted successfully');
        this.loadContacts(); // Reload the list after deletion
      },
      (error) => {
        this.message.error('Failed to delete the message');
      },
    );
  }
}
