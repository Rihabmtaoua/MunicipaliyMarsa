import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteTrottoirComponent } from './route-trottoir.component';

describe('RouteTrottoirComponent', () => {
  let component: RouteTrottoirComponent;
  let fixture: ComponentFixture<RouteTrottoirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouteTrottoirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteTrottoirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
