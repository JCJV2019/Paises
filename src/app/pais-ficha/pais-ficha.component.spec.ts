import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaisFichaComponent } from './pais-ficha.component';

describe('PaisFichaComponent', () => {
  let component: PaisFichaComponent;
  let fixture: ComponentFixture<PaisFichaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaisFichaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaisFichaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
