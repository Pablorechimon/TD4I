import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesComponentsComponent } from './games-components.component';

describe('GamesComponentsComponent', () => {
  let component: GamesComponentsComponent;
  let fixture: ComponentFixture<GamesComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GamesComponentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GamesComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
