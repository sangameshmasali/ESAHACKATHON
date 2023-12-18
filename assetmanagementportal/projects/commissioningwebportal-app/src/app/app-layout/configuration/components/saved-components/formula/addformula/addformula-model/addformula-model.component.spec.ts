import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddformulaModelComponent } from './addformula-model.component';

describe('AddformulaModelComponent', () => {
  let component: AddformulaModelComponent;
  let fixture: ComponentFixture<AddformulaModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddformulaModelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddformulaModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
