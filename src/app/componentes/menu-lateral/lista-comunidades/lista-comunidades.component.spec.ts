import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaComunidadesComponent } from './lista-comunidades.component';

describe('ListaComunidadesComponent', () => {
  let component: ListaComunidadesComponent;
  let fixture: ComponentFixture<ListaComunidadesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaComunidadesComponent]
    });
    fixture = TestBed.createComponent(ListaComunidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
