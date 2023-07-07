import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BienvenidaComponentComponent } from './bienvenida-component.component';

describe('BienvenidaComponentComponent', () => {
  let component: BienvenidaComponentComponent;
  let fixture: ComponentFixture<BienvenidaComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BienvenidaComponentComponent]
    });
    fixture = TestBed.createComponent(BienvenidaComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
