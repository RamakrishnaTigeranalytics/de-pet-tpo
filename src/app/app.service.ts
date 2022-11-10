import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AuthenticationService } from './core/services/auth/auth.service'; 

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private httpclient: HttpClient) { 

  }


  // header = new HttpHeaders().set('Authorization',  `Bearer ${sessionStorage.getItem("auth")}`);

  public login(body:any) 
  {
   return this.httpclient.post('http://127.0.0.1:8000/scenario_comparision/login/',body)
  }

  public register(body:any) 
  {
   return this.httpclient.post('http://127.0.0.1:8000/scenario_comparision/register/',body)
  }

  public getcategories(): Observable<any>  
  {
   return this.httpclient.get('http://localhost:8000/scenario_comparision/offerConfigData')
  }

  public idtt(id:any): Observable<any>  
  {let body={ "offer_config_id": id };
   return this.httpclient.post('http://localhost:8000/scenario_comparision/scenarioMetricsData',body)
  }

  scenarioOffersData:any =
{
    "data": [
        {
            "promo_type_code": "ind",
            "promomech_code": "atpp",
            "regular_price": 59,
            "promo_price": 47,
            "discount_depth": 20
        },
        {
            "promo_type_code": "pair",
            "promomech_code": "fp",
            "regular_price": 498,
            "promo_price": 359,
            "discount_depth": 28
        }
    ],
    "status": "OK",
    "http_code": 200

}

  public firsttable(id:any): Observable<any>  
  {let body={ "offer_config_id": id };
   //return this.httpclient.post('http://localhost:8000/scenario_comparision/scenarioOffersData',body)
   return of(this.scenarioOffersData)
  }

  // public getmetrics(): Observable<any>  
  // {
  //  return this.httpclient.get('http://127.0.0.1:8000/scenario_comparision/metrics?category=segments&kpi_code=1007&scenario_ids=1001%2C1002')
  // }

  reports:any =
  {
      "data": [
          {
              "scenario": [
                  null
              ],
              "series": {
                  "Active - High Frequency High Offers": [
                      0.00900286
                  ],
                  "Active - High Frequency Low Offers High Check": [
                      0.000365598
                  ],
                  "Active - High Frequency Low Offers Low Check": [
                      0.00373356
                  ],
                  "Active - Low Frequency": [
                      0.00535854
                  ],
                  "Enrollment - Early beginners": [
                      0
                  ],
                  "Enrollment - Late start": [
                      0.00086642
                  ],
                  "Inactive - At least one transaction": [
                      0.00458257
                  ],
                  "Inactive - No Transactions": [
                      0.00252712
                  ],
                  "Lapsing - At least one transaction": [
                      0.00634904
                  ],
                  "Lapsing - No transactions": [
                      0.0000798956
                  ],
                  "Offline": [
                      0
                  ],
                  "Pre-registration": [
                      0.00470382
                  ]
              }
          }
      ],
      "status": "OK",
      "http_code": 200
  }

  public getreports(): Observable<any>  
  {
   //return this.httpclient.get('http://127.0.0.1:8000/scenario_comparision/reports?category=segments&kpi_code=1007&scenario_ids=1001%2C1002')
    return of(this.reports)
  }


  jsonScenario: any = {
    data: [
      {'scenario_offer_data':[
      {segment_name:'segment1', discount_mechanic:{'promo_name':'promo1'},product_type:{'promo_type_name':'p_type1'},offer_package_name:'offer1', offer_duration:'1 year', start_date:'03/11/2022',offer_config_id:'1'},
      {segment_name:'segment2', discount_mechanic:{'promo_name':'promo2'},product_type:{'promo_type_name':'p_type2'},offer_package_name:'offer2', offer_duration:'10 year', start_date:'20/11/2022',offer_config_id:'2'},
      {segment_name:'segment3', discount_mechanic:{'promo_name':'promo3'},product_type:{'promo_type_name':'p_type3'},offer_package_name:'offer3', offer_duration:'5 year', start_date:'03/12/2022',offer_config_id:'3'}
    ]}
    ],
      status: "OK",
      http_code: 200,
    };

  

  public scenarioResults(): Observable<any>
  {
    //return this.httpclient.get('http://127.0.0.1:8000/scenario_planner/scenario_results/1')
    return of(this.jsonScenario);
  }


  jsonCompare: any = {
    data: [
      {offer_package_name:'offer1', offer_duration:'1 year', start_date:'03/11/2022'},
      {offer_package_name:'offer2', offer_duration:'10 year', start_date:'03/12/2022'},
      {offer_package_name:'offer3', offer_duration:'5 year', start_date:'20/11/2022'}
    ],
      status: "OK",
      http_code: 200,
    };

  

  public Compare(): Observable<any>
  {
    //return this.httpclient.get('http://127.0.0.1:8000/scenario_planner/scenario_results/1')
    return of(this.jsonCompare);
  }


  json: any = {
  data: [
    {
      scenario_name: "Test Scenario with Optimiser",
      segment: "Mass Online",
      discount_mechanic: "Price Discount - Strike old show new",
      product_type: "Pair",
    },
    {
      scenario_name: "Price Fall Scenario",
      segment: "Pre-Registration",
      discount_mechanic: "Price Discount - 2 for price of 1",
      product_type: "Set of 2",
    },
    {
      scenario_name: "Orbit OTC-20-changed",
      segment: "Active - Low Frequency",
      discount_mechanic: "Price Discount - @Price Point",
      product_type: "Individual",
    },
    {
      scenario_name: "Price Rise Scenario",
      segment: "Inactive - No Transactions",
      discount_mechanic: "Favorable prices: Product for XX Rubles",
      product_type: "Set of 3",
    },
    {
      scenario_name: "Test Scenario with Optimiser",
      segment: "Enrollment - Early beginners",
      discount_mechanic: "Price Discount - second @Price Point",
      product_type: "Individual",
    },
    {
      scenario_name: "Test Scenario with Optimiser",
      segment: "Enrollment - Late start",
      discount_mechanic: "Price Discount - Strike old show new",
      product_type: "Pair",
    },
  ],
    status: "OK",
    http_code: 200,
  };

fetchCardData() {
  return of(this.json);
}

json1: any = {
  data:['19.60M', '12.41M', '18.32M', '13.45M', '16.66M', '19.29M', '19.25M'],
  status: "OK",
  http_code: 200,
};

json2:any = {
  column1_data:[['13.93M', '+0.86M', [6, 1, 0, 13, 7, 13, 0]], ['13.42M', '-1.88M', [21, 5, 1, 1, 6, 21, 16]], ['12.36M', '+1.71M', [22, 10, 2, 4, 0, 2, 1]], ['18.46M', '+1.82M', [9, 18, 21, 20, 8, 9, 3]], ['17.32M', '+0.40M', [3, 18, 8, 21, 7, 16, 18]], ['15.99M', '-5.85M', [13, 11, 22, 23, 8, 20, 16]], ['18.32M', '-2.53M', [10, 15, 10, 20, 7, 5, 16]]],
  column2_data:[['11.78M', '+0.79M', [1, 9, 18, 3, 20, 9, 7]], ['15.96M', '+0.16M', [10, 13, 4, 10, 2, 13, 20]], ['15.77M', '-2.22M', [10, 22, 17, 14, 8, 16, 18]], ['16.87M', '-2.53M', [16, 3, 20, 18, 19, 14, 2]], ['15.89M', '+0.16M', [24, 6, 9, 18, 12, 17, 3]], ['20.48M', '+3.92M', [6, 19, 23, 8, 3, 14, 20]], ['17.98M', '-4.61M', [6, 21, 22, 12, 22, 10, 4]]],
  column3_data:[['11.96M', '+0.93M', [19, 14, 6, 17, 0, 3, 16]], ['20.42M', '+0.31M', [1, 21, 19, 10, 18, 20, 16]], ['15.64M', '+1.45M', [8, 17, 10, 18, 6, 6, 15]], ['16.56M', '+2.85M', [2, 18, 21, 4, 0, 13, 10]], ['15.67M', '-2.30M', [3, 23, 21, 17, 18, 13, 18]], ['19.21M', '-4.71M', [17, 22, 14, 14, 4, 13, 5]], ['16.86M', '+1.85M', [23, 6, 0, 11, 23, 1, 7]]],
  status: "OK",
  http_code: 200,
}


fetchBaseValues() {
  return of(this.json1);
}

fetchSimulatedValues() {
  return of(this.json2);
}


}
