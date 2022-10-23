import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReuseInputComponent } from './reuse-input.component';

describe('ReuseInputComponent', () => {
  let component: ReuseInputComponent;
  let fixture: ComponentFixture<ReuseInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReuseInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReuseInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
