import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolaireComponent } from './solaire.component';

describe('SolaireComponent', () => {
  let component: SolaireComponent;
  let fixture: ComponentFixture<SolaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
