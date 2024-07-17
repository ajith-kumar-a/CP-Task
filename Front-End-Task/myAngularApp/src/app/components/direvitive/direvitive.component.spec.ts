import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirevitiveComponent } from './direvitive.component';

describe('DirevitiveComponent', () => {
  let component: DirevitiveComponent;
  let fixture: ComponentFixture<DirevitiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DirevitiveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirevitiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
