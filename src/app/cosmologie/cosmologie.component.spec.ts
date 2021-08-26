import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CosmologieComponent } from './cosmologie.component';

describe('CosmologieComponent', () => {
  let component: CosmologieComponent;
  let fixture: ComponentFixture<CosmologieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CosmologieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CosmologieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
