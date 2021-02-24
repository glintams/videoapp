import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SsVideoPlayerComponent } from './ss-video-player.component';

describe('SsVideoPlayerComponent', () => {
  let component: SsVideoPlayerComponent;
  let fixture: ComponentFixture<SsVideoPlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SsVideoPlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SsVideoPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
