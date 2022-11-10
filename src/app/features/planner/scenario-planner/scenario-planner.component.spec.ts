import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScenarioPlannerComponent } from './scenario-planner.component';

describe('ScenarioPlannerComponent', () => {
  let component: ScenarioPlannerComponent;
  let fixture: ComponentFixture<ScenarioPlannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScenarioPlannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScenarioPlannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
