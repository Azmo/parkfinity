import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaseMyBayComponent } from './lease-my-bay.component';

describe('LeaseMyBayComponent', () => {
  let component: LeaseMyBayComponent;
  let fixture: ComponentFixture<LeaseMyBayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaseMyBayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaseMyBayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
