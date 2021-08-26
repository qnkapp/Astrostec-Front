import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemerciementFormContactComponent } from './remerciement-form-contact.component';

describe('RemerciementFormContactComponent', () => {
  let component: RemerciementFormContactComponent;
  let fixture: ComponentFixture<RemerciementFormContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemerciementFormContactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemerciementFormContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
