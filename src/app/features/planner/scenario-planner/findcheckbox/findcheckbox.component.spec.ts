import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindcheckboxComponent } from './findcheckbox.component';

describe('FindcheckboxComponent', () => {
  let component: FindcheckboxComponent;
  let fixture: ComponentFixture<FindcheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindcheckboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindcheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
