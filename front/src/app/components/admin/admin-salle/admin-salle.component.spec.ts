import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSalleComponent } from './admin-salle.component';

describe('AdminSalleComponent', () => {
  let component: AdminSalleComponent;
  let fixture: ComponentFixture<AdminSalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminSalleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
