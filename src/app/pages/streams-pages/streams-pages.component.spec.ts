import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StreamsPagesComponent } from './streams-pages.component';

describe('StreamsPagesComponent', () => {
  let component: StreamsPagesComponent;
  let fixture: ComponentFixture<StreamsPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StreamsPagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StreamsPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
