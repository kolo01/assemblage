import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPageProprietaireComponent } from './landing-page-proprietaire.component';

describe('LandingPageProprietaireComponent', () => {
  let component: LandingPageProprietaireComponent;
  let fixture: ComponentFixture<LandingPageProprietaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingPageProprietaireComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingPageProprietaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
