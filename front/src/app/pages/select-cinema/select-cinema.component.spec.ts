import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectCinemaComponent } from './select-cinema.component';

describe('SelectCinemaComponent', () => {
  let component: SelectCinemaComponent;
  let fixture: ComponentFixture<SelectCinemaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectCinemaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectCinemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
