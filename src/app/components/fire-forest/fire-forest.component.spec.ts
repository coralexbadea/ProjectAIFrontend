import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FireForestComponent } from './fire-forest.component';

describe('FireForestComponent', () => {
  let component: FireForestComponent;
  let fixture: ComponentFixture<FireForestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FireForestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FireForestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
