import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanalVideoComponent } from './canal-video.component';

describe('CanalVideoComponent', () => {
  let component: CanalVideoComponent;
  let fixture: ComponentFixture<CanalVideoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CanalVideoComponent]
    });
    fixture = TestBed.createComponent(CanalVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
