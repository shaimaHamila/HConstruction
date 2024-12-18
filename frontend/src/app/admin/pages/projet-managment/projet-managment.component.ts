import { Component } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';

import { NzDividerModule } from 'ng-zorro-antd/divider';
@Component({
  selector: 'app-projet-managment',
  templateUrl: './projet-managment.component.html',
  styleUrl: './projet-managment.component.scss'
})
export class ProjetManagmentComponent {
  visible = false;
  selectedProject: any = null;
  editVisible = false;
  //imageUrl: string = '';
  imageUrls: string[] = ['', '', '', '', ''];  // Array to store up to 5 image URLs

  dataSet = [
    {
      name: 'Project Alpha',
      client: 'Client A',
      location: 'City X',
      surfaceArea: '2000 sq ft',
      sector: 'Residential',
      images: [
        'https://www.google.com/url?sa=i&url=https%3A%2F%2Ffr.made-in-china.com%2Fco_qdtruck%2Fproduct_SHACMAN-tipper-truck-25-Tons-trucks-Tipper_heursihiy.html&psig=AOvVaw0Yhwlki84Sf0T6ciwE4Kj2&ust=1734564843934000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPD1yt37r4oDFQAAAAAdAAAAABAE',
        'https://example.com/image2.jpg',
        'image.jpeg'
      ],
      
      description: 'A beautiful residential complex.',
      
    },
    {
      name: 'Project Beta',
      client: 'Client B',
      location: 'City Y',
      surfaceArea: '3500 sq ft',
      sector: 'Commercial',
      image: ['https://example.com/image2.jpg',
              'https://img.freepik.com/vecteurs-libre/illustration-camion-transport-design-plat_23-2149157902.jpg?t=st=1734481978~exp=1734485578~hmac=f842f47bb10329b322b00fdf90aef80673ff673487679077ceec7c8a9afa1bb4&w=996'
      ],
      
      description: 'An innovative commercial space.',
    
    },
  ];

  onView(project: any): void {
    this.selectedProject = project;
    this.visible = true;
  }
// Open the Edit drawer
onEdit(project: any) {
  this.selectedProject = project;  
  //this.imageUrl = project.images ? project.images.join(', ') : ''; // initialize image URLs in the input
  this.imageUrls = project.images || ['', '', '', '', ''];  // Initialize the input fields with the current image URLs

  this.editVisible = true;
}

// Close the View drawer
closeViewDrawer(): void {
  this.visible = false;
}

// Close the Edit drawer
closeEditDrawer(): void {
  this.editVisible = false;
}

// Update the project after editing
onSubmitEdit(): void {
  // Update the project data (this is a simplified example)
  console.log('Updated project:', this.selectedProject);
  this.editVisible = false;
}
  
  onDelete(project: any) {
    console.log('Deleting project:', project);
    // Add logic for deleting the project.
    this.dataSet = this.dataSet.filter(item => item !== project);
  }

}
