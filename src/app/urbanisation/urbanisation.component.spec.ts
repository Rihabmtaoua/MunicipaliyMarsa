import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrbanisationComponent } from './urbanisation.component';

describe('UrbanisationComponent', () => {
  let component: UrbanisationComponent;
  let fixture: ComponentFixture<UrbanisationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UrbanisationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UrbanisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
