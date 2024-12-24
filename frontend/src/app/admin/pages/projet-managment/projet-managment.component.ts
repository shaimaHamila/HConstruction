import { Component } from '@angular/core';

@Component({
  selector: 'app-projet-managment',
  templateUrl: './projet-managment.component.html',
  styleUrls: ['./projet-managment.component.scss'],
})
export class ProjetManagmentComponent {
  editVisible = false;
  selectedProject: any = null;
  imageUrls: string[] = ['', '', '', '', ''];

  dataSet = [
    {
      name: 'Project Alpha',
      client: 'Client A',
      location: 'City X',
      surfaceArea: '2000 sq ft',
      sector: 'Residential',
      images: [
        'https://example.com/image1.jpg',
        'https://example.com/image2.jpg',
      ],
      description: 'A beautiful residential complex.',
    },
    {
      name: 'Project Beta',
      client: 'Client B',
      location: 'City Y',
      surfaceArea: '3500 sq ft',
      sector: 'Commercial',
      images: ['https://example.com/image3.jpg'],
      description: 'An innovative commercial space.',
    },
  ];

  onEdit(project: any): void {
    this.selectedProject = { ...project };
    this.imageUrls = project.images || ['', '', '', '', ''];
    this.editVisible = true;
  }

  closeEditDrawer(): void {
    this.editVisible = false;
  }

  onSubmitEdit(): void {
    const projectIndex = this.dataSet.findIndex(
      (p) => p.name === this.selectedProject.name,
    );
    if (projectIndex !== -1) {
      this.dataSet[projectIndex] = {
        ...this.selectedProject,
        images: this.imageUrls.filter((url) => url),
      };
    }
    this.editVisible = false;
  }

  onDelete(project: any): void {
    this.dataSet = this.dataSet.filter((item) => item !== project);
  }
}
