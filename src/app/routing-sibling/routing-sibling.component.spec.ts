import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingSiblingComponent } from './routing-sibling.component';

describe('RoutingSiblingComponent', () => {
  let component: RoutingSiblingComponent;
  let fixture: ComponentFixture<RoutingSiblingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoutingSiblingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutingSiblingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
