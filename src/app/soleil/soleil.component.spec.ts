import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoleilComponent } from './soleil.component';

describe('SoleilComponent', () => {
  let component: SoleilComponent;
  let fixture: ComponentFixture<SoleilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoleilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoleilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
