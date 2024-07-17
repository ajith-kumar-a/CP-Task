import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductAdddComponent } from './product-addd.component';

describe('ProductAdddComponent', () => {
  let component: ProductAdddComponent;
  let fixture: ComponentFixture<ProductAdddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductAdddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductAdddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
