import { OnInit, Component, ViewEncapsulation, ViewChild } from "@angular/core";
import { MatSelectChange } from "@angular/material/select";
import { BehaviorSubject } from "rxjs";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { Router } from "@angular/router";
import { AppService } from "src/app/app.service";
// import { ApexOptions, ChartComponent } from "ng-apexcharts";

import {
  ApexOptions,
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexStroke,
  ApexGrid,
  ApexTooltip,
  ApexMarkers,
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
  colors: any[];
  tooltip: ApexTooltip;
  markers: ApexMarkers;
};



// Table filing column wise , default value:NA
const DETAILS_TABLE: any = [
  // { col1: "Offer ID", col2: "", col3: "", col4: "", col5: ""},
  // { col1: "Promo Type ID", col2: "", col3: "", col4: "", col5: ""},
  { col1: "Promo Type Code", col2: "", col3: "", col4: "", col5: ""},
  // { col1: "Promo Mech ID", col2: "", col3: "", col4: "", col5: ""},
  { col1: "Promo Mech Code", col2: "", col3: "", col4: "", col5: ""},
  { col1: "Regular Price($)", col2: "", col3: "", col4: "", col5: ""},
  { col1: "Promo Price($)", col2: "", col3: "", col4: "" },
  { col1: "Discount Depth(%)", col2: "", col3: "", col4: "" },
  // { col1: "Impact Index", col2: "", col3: "", col4: "" },
  // { col1: "Offer Usage", col2: "", col3: "", col4: "" },
];

const METRICS_TABLE: any = [
  { col1: "Guest Count", col2: "", col3: "", col4: "", col5: "" },
  { col1: "User Count", col2: "", col3: "", col4: "", col5: "" },
  { col1: "Net Sales($)", col2: "", col3: "", col4: "", col5: "" },
  { col1: "Gross Profit($)", col2: "", col3: "", col4: "", col5: "" },
  { col1: "Effect On Margin($)", col2: "", col3: "", col4: "", col5: "" },
  { col1: "Avg Check($)", col2: "", col3: "", col4: "", col5: "" },
  { col1: "UPT", col2: "", col3: "", col4: "", col5: "" },
];

const LIFTS_TAB: any = [
  { col1: "Guest Count", col2: "", col3: "", col4: "", col5: "" },
  { col1: "User Count", col2: "", col3: "", col4: "", col5: "" },
  { col1: "Net Sales", col2: "", col3: "", col4: "", col5: "" },
  { col1: "Gross Profit", col2: "", col3: "", col4: "", col5: "" },
  { col1: "Effect On Margin", col2: "", col3: "", col4: "", col5: "" },
  { col1: "Avg Check", col2: "", col3: "", col4: "", col5: "" },
  { col1: "UPT", col2: "", col3: "", col4: "", col5: "" },
];

@Component({
  selector: 'app-landing-home',
  templateUrl: './landing-home.component.html',
  styleUrls: ['./landing-home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LandingHomeComponent implements OnInit {

  tabledata: any[] = [];
  columns: any[] = ["Content", "Value", "Scenario value", "Lift"];

  reportstable: any[] = [];
  reportscolumns: any[] = ["Title", "Value"];

  columnstone: any[] = ["a", "b", "c", "d"];

  @ViewChild("chart") chart!: ChartComponent;
  //public chartOptions!: Partial<ChartOptions>;
  public chartOptions!: Partial<ChartOptions> | any;

  constructor(private router: Router, private appservice: AppService) { }

  ngOnInit() {
    /* if (sessionStorage.getItem("accessToken")) {
      // this.getmetrics();
      // this.getcategories();
      this.getreports();
      // this.defaultcolumnfiling();
      this.getFilterValues();
      // this._prepareChartData([10, 15, 10, 20, 0, 5, 20 , 15, 5]);
      this.getBaseValues();
      this.getSimulatedValues();
      // this.gettableone(this.defaultMetricCode,2);
      // this.gettableone(this.defaultMetricCodetb2,3);
      // this.gettableone(this.defaultMetricCodetb3,4);
    } else {
      this.router.navigate(["/sign-in"]);
    } */
    // console.log(this.reportstable);
    // console.log(this.tabledata);
    this.getFilterValues();
    this.getreports();
    this.getBaseValues();
    this.getSimulatedValues();
  }
  categories: any;
  Asish = "Hello";
  // data: any;
  defaultMetricCode: any;
  defaultMetricCodetb2: any;
  defaultMetricCodetb3: any;

  displayedColumns: string[] = ["col1", "col2", "col3", "col4", "col5"];
  dataSource = DETAILS_TABLE;

  displayedColumns2: string[] = ["offer_id"];
  dataSource2: any;

  displayedColumns3: string[] = ["col1", "col2", "col3", "col4", "col5"];
  dataSource3 = METRICS_TABLE;
  dataSource4 = LIFTS_TAB;

  // getmetrics(){
  //     this.appservice.getmetrics().subscribe((result:any) =>{

  //         Object.keys(result.data).forEach(element=>{
  //             let temp:any= {};
  //             temp["Content"]=element;
  //             temp["Value"]=Object.keys(result.data[element][0])[0];
  //             temp["Scenario value"]=result.data[element][0][temp.Value]["scenario_value"];
  //             temp["Lift"]=result.data[element][0][temp.Value]["lift"];
  //             this.tabledata.push(temp);

  //          })
  //     }, (error)=> {
  //         console.log("error");
  //     })
  // }

  
  getreports() {
    this.appservice.getreports().subscribe(
      (result: any) => {
        var obj = result.data[0]["series"];
        for (var key in obj) {
          if (obj.hasOwnProperty(key)) {
            let temp: any = {};
            temp["Title"] = key;
            temp["Value"] = obj[key];
            this.reportstable.push(temp);
            // console.log(temp);
          }
        }
      },
      (error) => {
        console.log("error");
      }
    );
  }

  // getcategories() {
  //   // let body = "segments";
  //   this.appservice.getcategories().subscribe(
  //     (result: any) => {
  //       this.categories = result.data;
  //       this.defaultMetricCode = this.categories[0].offer_config_id;
  //       this.defaultMetricCodetb2 = this.categories[1].offer_config_id;
  //       this.defaultMetricCodetb3 = this.categories[2].offer_config_id;
  //       this.defaultcolumnfiling();
  //       this.defaultgtcolumnfiling();
  //     },
  //     (error) => {
  //       console.log("error");
  //     }
  //   );
  // }

  FilterValues:any;
  getFilterValues() {
    // let body = "segments";
    this.appservice.scenarioResults().subscribe(
      (result: any) => {
        this.FilterValues = result.data[0].scenario_offer_data;
        console.log('filterData',this.FilterValues)
        // this.defaultMetricCode = this.FilterValues[0].offer_config_id;
        // this.defaultMetricCodetb2 = this.FilterValues[1].offer_config_id;
        // this.defaultMetricCodetb3 = this.FilterValues[2].offer_config_id;

        if(sessionStorage.getItem('id1') != null)
        {
          this.defaultMetricCode=sessionStorage.getItem('id1');
          sessionStorage.removeItem('id1');
        }
        else{
          this.defaultMetricCode = this.FilterValues[0].offer_config_id;
          console.log('filter',this.defaultMetricCode)
        }

        if(sessionStorage.getItem('id2') != null)
        {
          this.defaultMetricCodetb2=sessionStorage.getItem('id2');
          sessionStorage.removeItem('id2');
        }
        else{
          this.defaultMetricCodetb2 = this.FilterValues[1].offer_config_id;
        }

        if(sessionStorage.getItem('id3') != null)
        {
          this.defaultMetricCodetb3=sessionStorage.getItem('id3');
          sessionStorage.removeItem('id3');
        }
        else{
          this.defaultMetricCodetb3 = this.FilterValues[2].offer_config_id;
        }
        this.defaultMetricCode=Number(this.defaultMetricCode);
        this.defaultMetricCodetb2=Number(this.defaultMetricCodetb2);
        this.defaultMetricCodetb3=Number(this.defaultMetricCodetb3);
        this.defaultcolumnfiling();
        // this.defaultgtcolumnfiling();
      },
      (error) => {
        console.log("error");
      }
    );
  }


  back() {
    this.router.navigateByUrl("/dashboard");
  }

  filters: {
    categorySlug$: BehaviorSubject<string>;
  } = {
    categorySlug$: new BehaviorSubject("all"),
  };

  faqCategory = {
    faqs: { question: "questoin?", answer: "answer" },
  };

  /**
   * Track by function for ngFor loops
   *
   * @param index
   * @param item
   */
  trackByFn(index: number, item: any): any {
    return item.id || index;
  }

  /**
   * Filter by category
   *
   * @param change
   */

  defaultgtcolumnfiling() {
    this.getgt(this.defaultMetricCode, 2);
    this.getgt(this.defaultMetricCodetb2, 3);
    this.getgt(this.defaultMetricCodetb3, 4);
  }

  getgt(id: any, col: any) {
    this.appservice.idtt(id).subscribe(
      (result: any) => {
        let values = Object.values(result.data);
        // console.log("First table:",result.data);
        // if (col == 2) 
        // this.populateT2Col1(values);
        // else if (col == 3) 
        // this.populateT2Col2(values);
        // else if (col == 4) 
        // this.populateT2Col3(values);
      },
      (error) => {
        console.log("error");
      }
    );
  }
  populateT2Col1(values: any) {
    for (var i = 0; i < this.dataSource3.length; i++) {
      this.dataSource3[i].col3 = values[i].scenario_value;
      if (!values[i]) this.dataSource3[i].col3 = "";
      this.dataSource4[i].col3 = values[i].lift;
      if (!values[i]) this.dataSource4[i].col3 = "";
    }
  }

  populateT2Col2(values: any) {
    for (var i = 0; i < this.dataSource3.length; i++) {
      this.dataSource3[i].col4 = values[i].scenario_value;
      if (!values[i]) this.dataSource3[i].col4 = "";
      this.dataSource4[i].col4 = values[i].lift;
      if (!values[i]) this.dataSource4[i].col4 = "";
    }
  }

  populateT2Col3(values: any) {
    for (var i = 0; i < this.dataSource3.length; i++) {
      this.dataSource3[i].col5 = values[i].scenario_value;
      if (!values[i]) this.dataSource3[i].col5 = "";
      this.dataSource4[i].col5 = values[i].lift;
      if (!values[i]) this.dataSource4[i].col5 = "";
    }
  }

  defaultcolumnfiling() {
    this.gettableone(this.defaultMetricCode, 3);
    this.gettableone(this.defaultMetricCodetb2, 4);
    this.gettableone(this.defaultMetricCodetb3, 5);
  }

  gettableone(id: any, col: any) {
    this.appservice.firsttable(id).subscribe(
      (result: any) => {
        console.log("Result :",result.data[0]);

        let values = Object.values(result.data[0]);
        if (col == 3) this.populateCol2(values);
        else if (col == 4) this.populateCol3(values);
        else if (col == 5)
        this.populateCol4(values);
      },
      (error) => {
        console.log("error");
      }
    );
  }
  populateCol2(values: any) {
    for (var i = 0; i < this.dataSource.length; i++) {
      this.dataSource[i].col3 = values[i];
      if (!values[i]) this.dataSource[i].col3 = "";
    }
  }
  populateCol3(values: any) {
    for (var i = 0; i < this.dataSource.length; i++) {
      this.dataSource[i].col4 = values[i];
      if (!values[i]) this.dataSource[i].col4 = "";
    }
  }
  populateCol4(values: any) {
    for (var i = 0; i < this.dataSource.length; i++) {
      this.dataSource[i].col5 = values[i];
      if (!values[i]) this.dataSource[i].col5 = "";
    }
  }

  filterByCategory(change: MatSelectChange, col: any): void {
    console.log("GETTTTTT",change);
    // this.getgt(change.value, col);
    this.gettableone(change.value, col);
    this.filters.categorySlug$.next(change.value);
  }

  baseValues:any;
  getBaseValues() {
    this.appservice.fetchBaseValues().subscribe(
      (result: any) => {
        // console.log("BaseValues :",result.data);
        this.baseValues = result.data;
        for (var i = 0; i < this.dataSource3.length; i++) {
          this.dataSource3[i].col2 = this.baseValues[i];
          if (!this.baseValues[i]) this.dataSource3[i].col2 = "";
          this.dataSource4[i].col2 = this.baseValues[i];
          if (!this.baseValues[i]) this.dataSource4[i].col2 = "";
        }
      },
      (error) => {
        console.log("Error");
      }
    );
  }


  SimulatedValues:any;
  getSimulatedValues() {
    this.appservice.fetchSimulatedValues().subscribe(
      (result: any) => {
        this.SimulatedValues = result.column1_data;
        for (var i = 0; i < this.dataSource3.length; i++) {
          this.dataSource3[i].col3 =  [this.SimulatedValues[i][0] , this.SimulatedValues[i][1] , this._prepareChartData(this.SimulatedValues[i][2])];
          if (!this.SimulatedValues[i]) this.dataSource3[i].col3[0] = "";
          this.dataSource4[i].col3 = this.SimulatedValues[i][0];
          if (!this.SimulatedValues[i]) this.dataSource4[i].col3 = "";
        }

        this.SimulatedValues = result.column2_data;
        for (var i = 0; i < this.dataSource3.length; i++) {
          this.dataSource3[i].col4 =  [this.SimulatedValues[i][0] , this.SimulatedValues[i][1] , this._prepareChartData(this.SimulatedValues[i][2])];
          if (!this.SimulatedValues[i]) this.dataSource3[i].col4 = "";
          this.dataSource4[i].col4 = this.SimulatedValues[i][0];
          if (!this.SimulatedValues[i]) this.dataSource4[i].col4 = "";
        }

        this.SimulatedValues = result.column3_data;
        for (var i = 0; i < this.dataSource3.length; i++) {
          this.dataSource3[i].col5 =  [this.SimulatedValues[i][0] , this.SimulatedValues[i][1] , this._prepareChartData(this.SimulatedValues[i][2])];
          if (!this.SimulatedValues[i]) this.dataSource3[i].col5 = "";
          this.dataSource4[i].col5 = this.SimulatedValues[i][0];
          if (!this.SimulatedValues[i]) this.dataSource4[i].col5 = "";
        }

      },
      (error) => {
        console.log("Error");
      }
    );
  }




  // @ViewChild('btcChartComponent')
  // btcChartComponent!: ChartComponent;
  // appConfig: any;
  // btcOptions: ApexOptions = {};
  // data: any;
  // drawerMode: 'over' | 'side' = 'side';
  // drawerOpened: boolean = true;
  watchlistChartOptions: ApexOptions = {};


  _prepareChartData(arr:any)
    {

    // Watchlist options
    return {
      series: [
        {
          name: "",
          data: arr
        }
      ],
      chart  : {
          animations: {
              enabled: false
          },
          width     : '100%',
          height    : '100%',
          type      : 'line',
          sparkline : {
              enabled: true
          }
      },
      colors : ['#000000'],
      stroke : {
          width: 2,
          curve: 'straight',
      },
      tooltip: {
          enabled: false
      },
      xaxis  : {
          type: 'category'
      },
      dataLabels: {
        enabled: false
      },
      markers: {
        size: 2
      },
  };
 }


}
