import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActeNaissanceComponent } from './acte-naissance.component';

describe('ActeNaissanceComponent', () => {
  let component: ActeNaissanceComponent;
  let fixture: ComponentFixture<ActeNaissanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActeNaissanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActeNaissanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
