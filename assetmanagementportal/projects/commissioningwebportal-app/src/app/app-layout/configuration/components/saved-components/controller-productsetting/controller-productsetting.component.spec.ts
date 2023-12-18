import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControllerProductsetting } from './controller-productsetting.component';

describe('ControllerProductsetting', () => {
  let component: ControllerProductsetting;
  let fixture: ComponentFixture<ControllerProductsetting>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControllerProductsetting ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControllerProductsetting);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
