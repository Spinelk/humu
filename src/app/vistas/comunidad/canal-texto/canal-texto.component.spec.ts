import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanalTextoComponent } from './canal-texto.component';

describe('CanalTextoComponent', () => {
  let component: CanalTextoComponent;
  let fixture: ComponentFixture<CanalTextoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CanalTextoComponent]
    });
    fixture = TestBed.createComponent(CanalTextoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
