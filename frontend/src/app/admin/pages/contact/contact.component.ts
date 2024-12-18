import { Component } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzMessageService } from 'ng-zorro-antd/message';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
  
})
export class ContactComponent {
  visible = false;
  editVisible = false;
  selectedContact: any = null;

  dataSet = [
    {
      name: 'John Doe',
      email: 'john.doe@example.com',
      subject: 'Feedback',
      message: 'This is a feedback message.',
      phone: '123-456-7890',
      createdAt: new Date('2024-12-01'),
    },
    {
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      subject: 'Inquiry',
      message: 'This is an inquiry message.',
      phone: '987-654-3210',
      createdAt: new Date('2024-12-05'),
    },
  ];

  constructor(private message: NzMessageService) {}

  onView(contact: any) {
    this.selectedContact = contact;
    this.visible = true;
  }

  onEdit(contact: any) {
    this.selectedContact = { ...contact }; // Copy the contact data to the edit form
    this.editVisible = true;
  }

  closeViewDrawer(): void {
    this.visible = false;
  }

  closeEditDrawer(): void {
    this.editVisible = false;
  }

  onSubmitEdit(): void {
    console.log('Updated contact:', this.selectedContact);
    const index = this.dataSet.findIndex(item => item.email === this.selectedContact.email);
    if (index > -1) {
      this.dataSet[index] = { ...this.selectedContact }; // Update the contact in the list
    }
    this.editVisible = false;
    this.message.success('Contact updated successfully!');
  }

  onDelete(contact: any) {
    this.dataSet = this.dataSet.filter(item => item !== contact);
  }

}
