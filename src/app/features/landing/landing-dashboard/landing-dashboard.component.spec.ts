import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { of } from 'rxjs';
import { LandingPageService } from 'src/app/core/services/landing/landing-page.service';

import { LandingDashboardComponent } from './landing-dashboard.component';

fdescribe('LandingDashboardComponent', () => {
  let component: LandingDashboardComponent;
  let fixture: ComponentFixture<LandingDashboardComponent>;
  let mockLandingPageService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingDashboardComponent ],
      imports :[HttpClientTestingModule,BrowserDynamicTestingModule],
      providers:[
        // LandingPageService
        {provide:LandingPageService,useValue: jasmine.createSpyObj('LandingPageService',['fetchVal'])}
      ]

    })
    .compileComponents();

  });

  beforeEach(()=>{
    mockLandingPageService=TestBed.get(LandingPageService);
    mockLandingPageService.fetchVal.and.returnValue(of('assets/load-scenario-mock.json'));
    fixture = TestBed.createComponent(LandingDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display tab1', () => {
   // spyOn(mockLandingPageService, 'fetchVal').and.returnValue(of('assets/load-scenario-mock.json'));
    component.statusChange('active');
    expect(component.tab).toEqual('tab1');
    
   });

   
  it('should display tab2', () => {
    component.statusChange('completed');
    expect(component.tab).toEqual('tab2');
   });

   
  it('should display tab3', () => {
    component.statusChange('viewall');
    expect(component.tab).toEqual('tab3');
   });

   it('should disply Optimizer',()=>{
    component.toggleScenarioChange('Optimizer');
    expect(component.activeOptimizer).toBeTruthy();
   })
  
   it('should disply Optimizer False',()=>{
    component.toggleScenarioChange('Planner');
    expect(component.activeOptimizer).toBeFalsy();
   })

   it('should disply Planner',()=>{
    component.toggleScenarioChange('Planner');
    expect(component.activePlanner).toBeTruthy();
   })
  
   it('should disply Planner False',()=>{
    component.toggleScenarioChange('Optimizer');
    expect(component.activePlanner).toBeFalsy();
   })

   it('should disply table view',()=>{
    component.viewTable =false;
    let spy =spyOn(component, 'tableCreation');
    fixture.detectChanges();
    component.viewChange();
    expect(spy).toHaveBeenCalled();
   })
   it('should display card and table view ',()=>{
    component.toggleCardView('card');
    expect(component.activeCard).toBeTruthy();
   })
   it('should display card and table view1 ',()=>{
    component.toggleCardView('table');
    expect(component.activeTable).toBeTruthy();
   })

   it('should display card success ',()=>{
    component.toggleCardView('table');
    component.activeTable = true;
    fixture.detectChanges();
    expect(component.activity).toEqual('Success');
   })
   it('should display card Pending ',()=>{
    component.toggleCardView('card');
    component.activeTable = false;
    fixture.detectChanges();
    expect(component.activity).toEqual('Pending');
   })


});
