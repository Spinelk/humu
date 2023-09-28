import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelLateralComponent } from './panel-lateral.component';

describe('PanelLateralComponent', () => {
  let component: PanelLateralComponent;
  let fixture: ComponentFixture<PanelLateralComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PanelLateralComponent]
    });
    fixture = TestBed.createComponent(PanelLateralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
