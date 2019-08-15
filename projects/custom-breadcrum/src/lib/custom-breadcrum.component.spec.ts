import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomBreadcrumComponent } from './custom-breadcrum.component';

describe('CustomBreadcrumComponent', () => {
  let component: CustomBreadcrumComponent;
  let fixture: ComponentFixture<CustomBreadcrumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomBreadcrumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomBreadcrumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
