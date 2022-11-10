import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScenarioPlannerService } from '../scenario-planner.service';

const ELEMENT_DATA:any = [];

@Component({
  selector: 'app-scenario-planner',
  templateUrl: './scenario-planner.component.html',
  styleUrls: ['./scenario-planner.component.scss']
})
export class ScenarioPlannerComponent implements OnInit {

  minDate = new Date();
  maxDate = new Date();
  constructor(private router: Router,
    private scenarioservice: ScenarioPlannerService,
    private datepipe: DatePipe
    //private _TalibLoadingService: TalibLoadingService,
    //private _TalibAlertService: TalibAlertService
    ) {
  }

  ngOnInit(): void {

    this.getConfigurationApiCall();
    this.discountchannel();
    this.segment();
    this.discount_duration();
    //this.DiscountCalculation();
  }

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'showitem', 'showdiscountprice'];
  dataSource = ELEMENT_DATA;

  pagenumber: any = 1;
  min_page_number = 1;
  max_page_number = 6;
  scenarioName!: string;
  DiscountDepth:any;
  DiscountPrice: any;
  check1 = false; check2 = false;
  checkDisable:boolean=false;

  DiscountCalculation(){
    // this.DiscountDepth=DiscountDepthVal;
    if(this.DiscountDepth>0)
    {
      this.DiscountPrice=Math.round(this.regular_price - this.regular_price*(this.DiscountDepth/100));
      if(this.DiscountDepth<10 || this.DiscountDepth > 50)
      {
        //this._TalibAlertService.show("alertBox1");
        this.checkDisable=false;
        this.check1=false;
      }
      else
      {
        //this._TalibAlertService.dismiss("alertBox1");
        this.check1=true;
      }


      if(this.DiscountPrice<this.min_disc_price)
      {
        //this._TalibAlertService.show("alertBox2");
        this.checkDisable=false;
        this.check2=false;
      }
      else
      {
        //this._TalibAlertService.dismiss("alertBox2");
        this.check2=true;
      }

      if(this.check1== true && this.check2== true)
      this.checkDisable=true;

     console.log("Discount Depth : ", this.DiscountDepth);
     console.log("Discount Price : ", this.DiscountPrice);
    }

  }

  changepage(count: number): void {
    this.searchText='';
    if (
      (this.pagenumber == 1 && count == -1) ||
      (this.pagenumber == this.max_page_number && count == 1)
    )
      return;

    this.pagenumber += count;
  }

  checkboxlist1: any;
  checkboxlisttab2: any;
  segment_data:any;

  disabled = false;
  disabledtab2 = false;
  selectedindex: any = -1;
  selectedindextab2: any = -1;
  selectedvalue = "";
  DiscountChannelStore:any []= [];
  counter = 0;
  selectedvaluetab2 = "";
  promo_id:any = 1;
  segment_id: any = 2;

  selectedcheckboxvalue(index: any) {
    if (index == -1) {
      this.selectedvalue = "";
      return;
    }
    this.selectedvalue = this.checkboxlist1[index].promo_name;
    this.DiscountChannelStore[this.counter] = this.checkboxlist1[index].promo_name;
    // this.selectedvalue = this.DiscountChannelStore.join(","); 
    this.promo_id = this.checkboxlist1[index].promo_id;
    // console.log(this.promo_id);
  }

  boxhandler(index: any) {
    if (this.disabled == false) {
      this.disabled = true;
      this.selectedindex = index;
    } else {
      this.disabled = false;
      this.selectedindex = -1;
    }
    this.selectedcheckboxvalue(this.selectedindex);
  }

  user_count:any;
  SegmentChannelStore:any []= [];
  selectedcheckboxvaluetab2(index: any) {
    if (index == -1) {
      this.selectedvaluetab2 = "";
      return;
    }
    this.selectedvaluetab2 = this.segment_data[index].segment_name;
    this.SegmentChannelStore[this.counter] = this.segment_data[index].segment_name;
    // this.selectedvaluetab2 = this.SegmentChannelStore.join(","); 
    this.segment_id = this.segment_data[index].segment_id;
    this.user_count = this.segment_data[index].user_count;
    this.getcheckboxlist(this.promo_id,this.segment_id);
    // console.log(this.segment_id);
  }
  boxhandlertab2(index: any) {
    if (this.disabledtab2 == false) {
      this.disabledtab2 = true;
      this.selectedindextab2 = index;
    } else {
      this.disabledtab2 = false;
      this.selectedindextab2 = -1;
    }
    this.selectedcheckboxvaluetab2(this.selectedindextab2);
  }

  disabledtab3 = false;
  selectedindextab3: any = -1;
  selectedvaluetab3 = "";
  promomech_id = "";
  promomech_code:any;
  DiscountMechanicStore:any []= [];
  selectedcheckboxvaluetab3(index: any) {
    if (index == -1) {
      this.selectedvaluetab3 = "";
      return;
    }
    this.selectedvaluetab3 = this.checkboxlisttab2[index].promomech_name;
    this.DiscountMechanicStore[this.counter] = this.checkboxlisttab2[index].promomech_name;
    // this.selectedvaluetab3 = this.DiscountMechanicStore.join(","); 
    this.promomech_id = this.checkboxlisttab2[index].promomech_id;
    this.promomech_code = this.checkboxlisttab2[index].promomech_code;
    this.product_type(this.promo_id,this.segment_id,this.promomech_id);
    // console.log(this.promomech_id);
  }
  boxhandlertab3(index: any) {
    if (this.disabledtab3 == false) {
      this.disabledtab3 = true;
      this.selectedindextab3 = index;
    } else {
      this.disabledtab3 = false;
      this.selectedindextab3 = -1;
    }
    this.selectedcheckboxvaluetab3(this.selectedindextab3);
  }

  disabledtab4 = false;
  selectedindextab4: any = -1;
  selectedvaluetab4 = "";
  promo_type_id = 1;
  promo_type_code:any;
  ProductTypeStore:any []= [];

  selectedcheckboxvaluetab4(index: any) {
    if (index == -1) {
      this.selectedvaluetab4 = "";
      return;
    }
    this.selectedvaluetab4 = this.product_type_data[index].promo_type_name;
    this.ProductTypeStore[this.counter] = this.product_type_data[index].promo_type_name;
    // this.selectedvaluetab4 = this.ProductTypeStore.join(","); 
    this.promo_type_id = this.product_type_data[index].promo_type_id;
    this.promo_type_code = this.product_type_data[index].promo_type_code;
    this.items(this.promo_id,this.segment_id,this.promomech_id, this.promo_type_id);
    // console.log(this.promo_type_id);
  }
  boxhandlertab4(index: any) {
    // console.log(checked);
    if (this.disabledtab4 == false) {
      this.disabledtab4 = true;
      this.selectedindextab4 = index;
    } else {
      this.disabledtab4 = false;
      this.selectedindextab4 = -1;
    }
    this.selectedcheckboxvaluetab4(this.selectedindextab4);
  }

  disabledtab5 = false;
  selectedindextab5: any = -1;
  selectedvaluetab5 = "";
  item_code:any;
  item_id:any;
  category_id:any;
  selectedcheckboxvaluetab5(index: any) {
    if (index == -1) {
      this.selectedvaluetab5 = "";
      return;
    }
    this.selectedvaluetab5 = this.item_data[index].item_name;
    this.item_code = this.item_data[index].item_code;
    this.item_id = this.item_data[index].item_id;
    this.category_id = this.item_data[index].category_id;
    this.prices(this.item_code);
    // console.log(this.item_code);
  }
  boxhandlertab5(index: any) {
    if (this.disabledtab5 == false) {
      this.disabledtab5 = true;
      this.selectedindextab5 = index;
    } else {
      this.disabledtab5 = false;
      this.selectedindextab5 = -1;
      this.regular_price="";
      this.min_disc_price="";
      this.DiscountPrice="";
      this.DiscountDepth="";
    }
    this.selectedcheckboxvaluetab5(this.selectedindextab5);
  }

  discountchannel() {
    this.scenarioservice.discountchannel().subscribe((result) => {
      let data = result.data;
      this.checkboxlist1 = data;
      console.log('check1',this.checkboxlist1);
    });
  }

  segment() {
    this.scenarioservice.segment().subscribe((result) => {
      let data = result.data;
      this.segment_data = data;
      console.log('segment', this.segment_data)

    });
  }

    getcheckboxlist(id: any, seg: any) {
    this.scenarioservice.discount_mechanic(id, seg).subscribe((result) => {
      let data = result.data;
      this.checkboxlisttab2 = data;
    });
  }

  product_type_data:any;
  product_type(id: any, seg: any, mech:any) {
    this.scenarioservice.product_type(id, seg, mech).subscribe((result) => {
      let data = result.data;
      this.product_type_data = data;
    });
  }

  item_data:any;
  items(id: any, seg: any, mech:any, type:any) {
      this.scenarioservice.items(id, seg, mech, type).subscribe((result) => {
      let data = result.data;
      this.item_data = data;
    });
  }

  price_data:any;
  regular_price:any;
  min_disc_price:any;
  prices(code:any) {
    this.scenarioservice.prices(code).subscribe((result) => {
      let data = result.data;
      this.price_data = data;
      console.log(this.price_data[0].regular_price);
      this.regular_price = this.price_data[0].regular_price;
      this.min_disc_price = this.price_data[0].min_discount_price;
      // this.DiscountCalculation();
    });
  }


  weeklist:any;
  discount_duration_value: any;
  discount_duration() {
    this.scenarioservice.discount_duration().subscribe((result) => {
      let data = result.data;
      this.weeklist = data;
       console.log(this.weeklist);
    });
  }


  back() {
    this.router.navigateByUrl("landing/dashboard");
  }
  cancel(){
    // this.pagenumber=1;
    window.location.reload();
  }

  searchText: string = '';

  onSearchTextEntered(searchValue: string){
    this.searchText = searchValue;
    // console.log(this.searchText);
  }
  configList: any = {
    'discount_depth_min': 0,

  }

  start_date:any;
  pickthedate:any;

  updateCreateScenarioConfig() {
    // this.segmentConfig.scenario_name = !this.util.isNullOrEmptyOrUndefined(this.scenarioForm.getRawValue().scenario_name) ? this.scenarioForm.getRawValue().scenario_name : '';
    // this.segmentConfig.discount_duration = !this.util.isNullOrEmptyOrUndefined(this.scenarioForm.getRawValue().discount_duration[0]) ? this.scenarioForm.getRawValue().discount_duration[0].offer_duration_id : [];
    this.start_date = this.datepipe.transform(this.pickthedate, 'yyyy-MM-dd h:mm:ss+00:00') || '';
    // this.storeSegmentConfig();
    // console.log(this.scenarioForm.getRawValue().start_date);
    // console.log(constant.scenario_planner.dateTime);
    // console.log(this.start_date);
  }

  /** Start Date Min Validation */
  startDateCalulationMin(startDate: any) {
    let minStartDate;
    let date = new Date();
    date.setDate(date.getDate() + parseInt(startDate));
    minStartDate = new Date(date);
    return minStartDate
  }

  /** Start Date Min Validation */
  startDateCalulationMax(startdate: any, enddate: any) {
    let minStartDate = new Date();
    let maxStartDate;
    let date = new Date();
    date.setDate(date.getDate() + parseInt(startdate));
    minStartDate = new Date(date);
    let fromDate = new Date(minStartDate);
    fromDate.setDate(date.getDate() + parseInt(enddate));
    maxStartDate = new Date(fromDate);
    return maxStartDate
  }

  getConfigurationApiCall() {
    this.scenarioservice.getCongigurationService().subscribe((response: any) => {
      this.configList = response.data;
      console.log('config',this.configList)
      this.minDate = this.startDateCalulationMin(this.configList.default_min_start_date);
      // console.log(this.minDate);
      this.maxDate = this.startDateCalulationMax(this.configList.default_min_start_date, this.configList.default_max_start_date);
      // console.log(this.maxDate);
    })
  }


  save_data:any;

  scenario_creation(comp_disc:any , scenario_name:any , discount_duration_value:any , start_date:any)
    {
    this.scenarioservice.saveAPI(comp_disc, scenario_name, discount_duration_value, start_date
      ).subscribe((result) => {
      let data = result.data;
      this.save_data = data;
      console.log(this.save_data);
    });

  }



  submit(){
    this.scenario_creation(
      0,
      this.scenarioName,
      this.discount_duration_value,
      this.start_date
    );
    this.router.navigateByUrl("/dashboard");
  }


  togglenumber=1;
  test()
  {
    let arr = [      
      this.promo_id,
      this.segment_id,
      this.selectedvaluetab2,
      this.promo_id,
      this.user_count,
      this.selectedvaluetab3,
      this.promomech_code,
      this.promomech_id,
      this.selectedvaluetab4,
      this.promo_type_code,
      this.promo_type_id,
      this.DiscountDepth,
      this.regular_price,
      this.min_disc_price,
      this.DiscountPrice,
      this.selectedvaluetab5,
      this.item_code,
      this.item_id,
      this.category_id,
      this.selectedvalue
    ]

    this.scenarioservice.accumulateData(arr);

    let row = {position: this.selectedvalue, name: this.selectedvaluetab2, weight: this.selectedvaluetab3, symbol: this.selectedvaluetab4, showitem: this.selectedvaluetab5, showdiscountprice: this.DiscountPrice};
    this.dataSource.push(row);
    this.togglenumber=2;
  }

  test1()
  {

    this.selectedvalue="";
    this.selectedvaluetab2="";
    this.selectedvaluetab3="";
    this.selectedvaluetab4="";
    this.selectedvaluetab5="";

    this.disabledtab5 = false;
    this.selectedindextab5 = -1;
    this.regular_price="";
    this.min_disc_price="";
    this.DiscountPrice="";
    this.DiscountDepth="";
    this.item_data=undefined;
    this.product_type_data=undefined;
    this.checkboxlisttab2=undefined;
    this.disabled = false;
    this.selectedindex = -1;
    this.disabledtab2 = false;
    this.selectedindextab2 = -1;
    this.disabledtab3 = false;
    this.selectedindextab3 = -1;
    this.disabledtab4 = false;
    this.selectedindextab4 = -1;
    this.counter=this.counter+1;
    this.togglenumber=1;
    this.pagenumber=2;
  }

}
