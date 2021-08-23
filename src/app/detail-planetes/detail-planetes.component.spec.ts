import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPlanetesComponent } from './detail-planetes.component';

describe('DetailPlanetesComponent', () => {
  let component: DetailPlanetesComponent;
  let fixture: ComponentFixture<DetailPlanetesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailPlanetesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailPlanetesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
