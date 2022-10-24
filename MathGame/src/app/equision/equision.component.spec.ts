import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquisionComponent } from './equision.component';

describe('EquisionComponent', () => {
  let component: EquisionComponent;
  let fixture: ComponentFixture<EquisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquisionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EquisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
