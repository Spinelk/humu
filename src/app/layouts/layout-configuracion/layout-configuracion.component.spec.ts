import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutConfiguracionComponent } from './layout-configuracion.component';

describe('LayoutConfiguracionComponent', () => {
  let component: LayoutConfiguracionComponent;
  let fixture: ComponentFixture<LayoutConfiguracionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LayoutConfiguracionComponent]
    });
    fixture = TestBed.createComponent(LayoutConfiguracionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
