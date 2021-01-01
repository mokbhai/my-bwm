import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProductByCatComponent } from './view-product-by-cat.component';

describe('ViewProductByCatComponent', () => {
  let component: ViewProductByCatComponent;
  let fixture: ComponentFixture<ViewProductByCatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewProductByCatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewProductByCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
