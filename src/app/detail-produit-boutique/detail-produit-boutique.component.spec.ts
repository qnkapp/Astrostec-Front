import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailProduitBoutiqueComponent } from './detail-produit-boutique.component';

describe('DetailProduitBoutiqueComponent', () => {
  let component: DetailProduitBoutiqueComponent;
  let fixture: ComponentFixture<DetailProduitBoutiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailProduitBoutiqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailProduitBoutiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
