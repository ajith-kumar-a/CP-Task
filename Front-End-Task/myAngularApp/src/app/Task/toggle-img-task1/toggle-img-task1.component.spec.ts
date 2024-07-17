import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleImgTask1Component } from './toggle-img-task1.component';

describe('ToggleImgTask1Component', () => {
  let component: ToggleImgTask1Component;
  let fixture: ComponentFixture<ToggleImgTask1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ToggleImgTask1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToggleImgTask1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
