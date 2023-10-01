import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanalAudioComponent } from './canal-audio.component';

describe('CanalAudioComponent', () => {
  let component: CanalAudioComponent;
  let fixture: ComponentFixture<CanalAudioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CanalAudioComponent]
    });
    fixture = TestBed.createComponent(CanalAudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
