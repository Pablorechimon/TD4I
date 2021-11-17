import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenresPagesComponent } from './genres-pages.component';

describe('GenresPagesComponent', () => {
  let component: GenresPagesComponent;
  let fixture: ComponentFixture<GenresPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenresPagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenresPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
