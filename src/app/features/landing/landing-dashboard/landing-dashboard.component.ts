import {
  Component,
  OnInit,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  ViewChild,
} from "@angular/core";
import { Router } from "@angular/router";
import { AppService } from "src/app/app.service";
import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart,
  ApexFill,
  ApexDataLabels,
  ApexLegend,
  ChartComponent,
  ApexAxisChartSeries,
  ApexXAxis,
  ApexTitleSubtitle,
  ApexStroke,
  ApexGrid,
  ApexYAxis,
  ApexTooltip
} from "ng-apexcharts";
import { LandingPageService } from "src/app/core/services/landing/landing-page.service";

export interface Inter {

  label: string;
  offer_config_id: string;

}


export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
  fill: ApexFill;
  legend: ApexLegend;
  dataLabels: ApexDataLabels;
};

export type ChartOptions1 = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
  tooltip: ApexTooltip;
  colors: any[];
};

export type ChartOptions2 = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
  fill: ApexFill;
  legend: ApexLegend;
  dataLabels: ApexDataLabels;
};

@Component({
  selector: 'app-landing-dashboard',
  templateUrl: './landing-dashboard.component.html',
  styleUrls: ['./landing-dashboard.component.scss'],
   encapsulation: ViewEncapsulation.None,
   //changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingDashboardComponent implements OnInit {
  @ViewChild("chart") chart!: ChartComponent;
  public  activeOptimizer:boolean = true;
  public  activePlanner:boolean = false;
  
  // high:string = "TESTER";
  // @ViewChild("chart1") chart1!: ChartComponent;
  public chartOptions: Partial<ChartOptions> | any;
  public chartOptions1: Partial<ChartOptions1> | any;
  public chartOptions2: Partial<ChartOptions2> | any;
  public viewCard:Boolean = true;
  public viewTable:Boolean = false;
  public activeCard: boolean = true;
  public activeTable: boolean = false;
  tab: string='tab1';
  activity: string = "Pending";
  // data = [] as any;
  cardLoadData: any = [];

  constructor(private _router: Router, private appservice: AppService,private landingPageService:LandingPageService) {
    this.chartOptions1 = {
      series: [
        {
          name: "Series 1",
          data: [0, 4, 7, 6, 9, 12]
        }
      ],
      title:{
        text:'Chart1'
      },
      chart: {
        height: 200,
        width : 250,
        type: "line",
        sparkline : {
          enabled: true
        },
        zoom: {
          enabled: false
        }
      },
      colors: ["#FFA500"],
      dataLabels: {
        enabled: false
      },
      stroke: {
        width : 1.8,
        curve: "smooth",
      },
       grid: {
         row: {
           colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
           opacity: 0
        }
       },
      tooltip: {
        enabled: true
    },
      
      xaxis: {
        categories: [
          "Jan 2022",
          "Feb 2022",
          "Mar 2022",
          "Apr 2022",
          "May 2022",
          "Jun 2022",
        ],
        labels: {
          show: false}
      },

      yaxis: {
        labels: {
          show: false}
      }
    };

    this.chartOptions2 = {
      series: [12, 28, 60],
      labels: ['Planned', 'Planned', 'Planned'],
      chart: {
        width: 110,
        height: 130,
        type: "donut"
      },
      dataLabels: {
        enabled: false
      },
      fill: {
        type: "gradient"
      },
      legend: {
          show: false,
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };


    this.chartOptions = {
      series: [33, 33, 34],
      labels: ['Planned', 'Planned', 'Planned'],
      chart: {
        width: 110,
        height: 130,
        type: "donut"
      },
      dataLabels: {
        enabled: false
      },
      fill: {
        type: "gradient"
      },
      legend: {
          show: false,
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };
   }

  ngOnInit(): void {
    //this.getcategories();
    // this.optimizer_scenarios();
    // this.getScenarioResults();
    this.landingPageService.fetchVal().subscribe(data=>{
     this.cardLoadData = data.data;
    })
  }

  arr: number[] = [1, 2, 3, 4, 5, 6];

  cardData: any;


  optimizer_scenarios() {
    this.appservice.fetchCardData().subscribe((result) => {
      let data = result.data;
      this.cardData = data;
       console.log('card',this.cardData);
    });
  }

  categories:Inter[]=[];
  defaultMetricCode: any;
  defaultMetricCodetb2: any;
  defaultMetricCodetb3: any;

  getcategories() {
    // let body = "segments";
    this.appservice.getcategories().subscribe(
      (result: any) => {
        this.categories = result.data;
        // this.defaultMetricCode = this.categories[0].offer_config_id;
        // this.defaultMetricCodetb2 = this.categories[1].offer_config_id;
        // this.defaultMetricCodetb3 = this.categories[2].offer_config_id;
      },
      (error) => {
        console.log("error");
      }
    );
  }

  redirection(){
    this._router.navigateByUrl("/landing/home");
  }

  addScenario(){
    this._router.navigateByUrl("/planner/scenario")
  }

  scenarioResults:any;
  scenarioResultsLength: number = 0;
  getScenarioResults() {
    // let body = "segments";
    this.appservice.scenarioResults().subscribe(
      (result: any) => {
        this.scenarioResults = result.data[0].scenario_offer_data;
        this.scenarioResultsLength = this.scenarioResults.length;
        console.log('length',this.scenarioResultsLength);
        console.log("Results",this.scenarioResults);
         //console.log('trail:',this.scenarioResults[0].scenario_offer_data[0].dicount_mechanic.promomech_name);
        // console.log(this.scenarioResults[0]['offer_package_name'])
      },
      (error) => {
        console.log("error");
      }
    );
  }

  navHome(){
    this._router.navigateByUrl("/landing/home");
  }

  counter=0;
  a='id';
  b!:string;
  dataGet(result:any)
  {this.counter+=1;
    this.b=this.a+this.counter;
    sessionStorage.setItem(this.b, result.id);
    console.log("Get data",result);
  }

  generateTableHead(table:any, data:any) {
    let thead = table.createTHead();
    let row = thead.insertRow();
    for (let key of data) {
      let th = document.createElement("th");
      let text = document.createTextNode(key);
      th.appendChild(text);
      row.appendChild(th);
    }
  }

  generateTable(table:any, data:any) {
    for (let element of data) {
      let row = table.insertRow();
      for (let key in element) {
        let cell = row.insertCell();
        let text = document.createTextNode(element[key]);
        cell.appendChild(text);
      }
    }
  }

  tableCreation(){
    let table = document.querySelector("table");
    let data = Object.keys(this.cardData[0]);
    //console.log('data',data);
    this.generateTableHead(table, data);
    this.generateTable(table, this.cardData);
  }

  tableDeletion(){
    let table:any = document.querySelector("table");
    //console.log('table',table);
    table.innerHTML = "";
  }

  viewChange(){
    this.viewCard = !this.viewCard;
    this.viewTable = !this.viewTable;
    if(this.viewTable){
      this.tableCreation();
    }
    else{
      this.tableDeletion();
    }
  }  
  toggleScenarioChange(type:any){
      this.activeOptimizer = type == 'Optimizer' ? true : false;
      this.activePlanner = type == 'Planner' ? true : false;
  } 
  toggleCardView(type:any){
    // debugger
    this.activeCard = type == 'card' ? true : false;
    this.activeTable = type == 'table' ? true : false;
    this.activity = this.activeTable ? 'Success':  'Pending'

  }
  statusChange(type:any){
    if (type == 'active') {
      this.tab = 'tab1';
    } else if (type == 'completed') {
      this.tab = 'tab2';
    } else {
      this.tab = 'tab3';
    }
    // this.landingPageService.fetchVal().subscribe(data=>{
    //   // debugger
    //   this.data = data;
    // })
  }
  
}
