import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailSatellitesComponent } from './detail-satellites.component';

describe('DetailSatellitesComponent', () => {
  let component: DetailSatellitesComponent;
  let fixture: ComponentFixture<DetailSatellitesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailSatellitesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailSatellitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
