import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssethistoryComponent } from './assethistory.component';

describe('AssethistoryComponent', () => {
  let component: AssethistoryComponent;
  let fixture: ComponentFixture<AssethistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssethistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssethistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
