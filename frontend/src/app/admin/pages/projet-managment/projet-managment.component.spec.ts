import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetManagmentComponent } from './projet-managment.component';

describe('ProjetManagmentComponent', () => {
  let component: ProjetManagmentComponent;
  let fixture: ComponentFixture<ProjetManagmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjetManagmentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjetManagmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
