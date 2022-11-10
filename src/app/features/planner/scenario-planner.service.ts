import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ScenarioPlannerService {

  constructor(private httpclient: HttpClient) { }

   json: any = {
     data: [
       {
         promomech_id: 1,
         promomech_name: "Price Discount - 2 for price of 1",
         promomech_code: "bogo",
         recommender_flag: 1,
         scenario_planner_flag: 1,
         active: true,
         date_created: "2022-01-03T09:59:39Z",
       },
       {
         promomech_id: 2,
         promomech_name: "Favorable prices: Product for XX Rubles",
         promomech_code: "fp",
         recommender_flag: 1,
         scenario_planner_flag: 1,
         active: true,
         date_created: "2022-01-03T09:59:40Z",
       },
     ],
     status: "OK",
     http_code: 200,
   };

   fetchcheckboxlist() {
     return of(this.json);
   }
   header = new HttpHeaders().set(
     "Authorization",
     `Bearer ${sessionStorage.getItem("auth")}`
   );

   promomechanics:any =
{
    "data": [
        {
            "promomech_name": "Check Threshold - 209 Rubles - Product for 1 Ruble",
            "promomech_code": "ctp_209_1",
            "promomech_id": 32
        },
        {
            "promomech_name": "Check Threshold - 209 Rubles - Product for 10 Rubles",
            "promomech_code": "ctp_209_10",
            "promomech_id": 56
        },
        {
            "promomech_name": "Check Threshold - 209 Rubles - Product for 29 Rubles",
            "promomech_code": "ctp_209_29",
            "promomech_id": 80
        },
        {
            "promomech_name": "Check Threshold - 249 Rubles - Product for 1 Ruble",
            "promomech_code": "ctp_249_1",
            "promomech_id": 33
        },
        {
            "promomech_name": "Check Threshold - 249 Rubles - Product for 29 Rubles",
            "promomech_code": "ctp_249_29",
            "promomech_id": 81
        },
        {
            "promomech_name": "Check Threshold - 249 Rubles - Product for 49 Rubles",
            "promomech_code": "ctp_249_49",
            "promomech_id": 105
        },
        {
            "promomech_name": "Check Threshold - 259 Rubles - Product for 1 Ruble",
            "promomech_code": "ctp_259_1",
            "promomech_id": 34
        },
        {
            "promomech_name": "Check Threshold - 259 Rubles - Product for 29 Rubles",
            "promomech_code": "ctp_259_29",
            "promomech_id": 82
        },
        {
            "promomech_name": "Check Threshold - 259 Rubles - Product for 49 Rubles",
            "promomech_code": "ctp_259_49",
            "promomech_id": 106
        },
        {
            "promomech_name": "Check Threshold - 269 Rubles - Product for 1 Ruble",
            "promomech_code": "ctp_269_1",
            "promomech_id": 35
        },
        {
            "promomech_name": "Check Threshold - 279 Rubles - Product for 1 Ruble",
            "promomech_code": "ctp_279_1",
            "promomech_id": 36
        },
        {
            "promomech_name": "Check Threshold - 289 Rubles - Product for 1 Ruble",
            "promomech_code": "ctp_289_1",
            "promomech_id": 37
        },
        {
            "promomech_name": "Check Threshold - 289 Rubles - Product for 10 Rubles",
            "promomech_code": "ctp_289_10",
            "promomech_id": 61
        },
        {
            "promomech_name": "Check Threshold - 289 Rubles - Product for 29 Rubles",
            "promomech_code": "ctp_289_29",
            "promomech_id": 85
        },
        {
            "promomech_name": "Check Threshold - 299 Rubles - Product for 1 Ruble",
            "promomech_code": "ctp_299_1",
            "promomech_id": 38
        },
        {
            "promomech_name": "Check Threshold - 299 Rubles - Product for 29 Rubles",
            "promomech_code": "ctp_299_29",
            "promomech_id": 86
        },
        {
            "promomech_name": "Check Threshold - 299 Rubles - Product for 49 Rubles",
            "promomech_code": "ctp_299_49",
            "promomech_id": 110
        },
        {
            "promomech_name": "Check Threshold - 329 Rubles - Product for 1 Ruble",
            "promomech_code": "ctp_329_1",
            "promomech_id": 39
        },
        {
            "promomech_name": "Check Threshold - 329 Rubles - Product for 29 Rubles",
            "promomech_code": "ctp_329_29",
            "promomech_id": 87
        },
        {
            "promomech_name": "Check Threshold - 329 Rubles - Product for 49 Rubles",
            "promomech_code": "ctp_329_49",
            "promomech_id": 111
        },
        {
            "promomech_name": "Check Threshold - 339 Rubles - Product for 1 Ruble",
            "promomech_code": "ctp_339_1",
            "promomech_id": 40
        },
        {
            "promomech_name": "Check Threshold - 339 Rubles - Product for 29 Rubles",
            "promomech_code": "ctp_339_29",
            "promomech_id": 88
        },
        {
            "promomech_name": "Check Threshold - 339 Rubles - Product for 49 Rubles",
            "promomech_code": "ctp_339_49",
            "promomech_id": 112
        },
        {
            "promomech_name": "Check Threshold - 369 Rubles - Product for 1 Ruble",
            "promomech_code": "ctp_369_1",
            "promomech_id": 41
        },
        {
            "promomech_name": "Check Threshold - 369 Rubles - Product for 10 Rubles",
            "promomech_code": "ctp_369_10",
            "promomech_id": 65
        },
        {
            "promomech_name": "Check Threshold - 369 Rubles - Product for 29 Rubles",
            "promomech_code": "ctp_369_29",
            "promomech_id": 89
        },
        {
            "promomech_name": "Check Threshold - 379 Rubles - Product for 1 Ruble",
            "promomech_code": "ctp_379_1",
            "promomech_id": 42
        },
        {
            "promomech_name": "Check Threshold - 379 Rubles - Product for 29 Rubles",
            "promomech_code": "ctp_379_29",
            "promomech_id": 90
        },
        {
            "promomech_name": "Check Threshold - 379 Rubles - Product for 49 Rubles",
            "promomech_code": "ctp_379_49",
            "promomech_id": 114
        },
        {
            "promomech_name": "Check Threshold - 399 Rubles - Product for 1 Ruble",
            "promomech_code": "ctp_399_1",
            "promomech_id": 43
        },
        {
            "promomech_name": "Check Threshold - 399 Rubles - Product for 29 Rubles",
            "promomech_code": "ctp_399_29",
            "promomech_id": 91
        },
        {
            "promomech_name": "Check Threshold - 399 Rubles - Product for 49 Rubles",
            "promomech_code": "ctp_399_49",
            "promomech_id": 115
        },
        {
            "promomech_name": "Check Threshold - 409 Rubles - Product for 1 Ruble",
            "promomech_code": "ctp_409_1",
            "promomech_id": 44
        },
        {
            "promomech_name": "Check Threshold - 409 Rubles - Product for 29 Rubles",
            "promomech_code": "ctp_409_29",
            "promomech_id": 92
        },
        {
            "promomech_name": "Check Threshold - 409 Rubles - Product for 49 Rubles",
            "promomech_code": "ctp_409_49",
            "promomech_id": 116
        },
        {
            "promomech_name": "Check Threshold - 419 Rubles - Product for 1 Ruble",
            "promomech_code": "ctp_419_1",
            "promomech_id": 45
        },
        {
            "promomech_name": "Check Threshold - 419 Rubles - Product for 29 Rubles",
            "promomech_code": "ctp_419_29",
            "promomech_id": 93
        },
        {
            "promomech_name": "Check Threshold - 419 Rubles - Product for 49 Rubles",
            "promomech_code": "ctp_419_49",
            "promomech_id": 117
        },
        {
            "promomech_name": "Check Threshold - 459 Rubles - Product for 1 Ruble",
            "promomech_code": "ctp_459_1",
            "promomech_id": 46
        },
        {
            "promomech_name": "Check Threshold - 459 Rubles - Product for 29 Rubles",
            "promomech_code": "ctp_459_29",
            "promomech_id": 94
        },
        {
            "promomech_name": "Check Threshold - 459 Rubles - Product for 49 Rubles",
            "promomech_code": "ctp_459_49",
            "promomech_id": 118
        },
        {
            "promomech_name": "Check Threshold - 479 Rubles - Product for 1 Ruble",
            "promomech_code": "ctp_479_1",
            "promomech_id": 47
        },
        {
            "promomech_name": "Check Threshold - 479 Rubles - Product for 29 Rubles",
            "promomech_code": "ctp_479_29",
            "promomech_id": 95
        },
        {
            "promomech_name": "Check Threshold - 479 Rubles - Product for 49 Rubles",
            "promomech_code": "ctp_479_49",
            "promomech_id": 119
        },
        {
            "promomech_name": "Check Threshold - 559 Rubles - Product for 1 Ruble",
            "promomech_code": "ctp_559_1",
            "promomech_id": 49
        },
        {
            "promomech_name": "Check Threshold - 559 Rubles - Product for 29 Rubles",
            "promomech_code": "ctp_559_29",
            "promomech_id": 97
        },
        {
            "promomech_name": "Check Threshold - 559 Rubles - Product for 49 Rubles",
            "promomech_code": "ctp_559_49",
            "promomech_id": 121
        },
        {
            "promomech_name": "Favorable prices: Product for XX Rubles",
            "promomech_code": "fp",
            "promomech_id": 2
        },
        {
            "promomech_name": "Price Discount - 2 for price of 1",
            "promomech_code": "bogo",
            "promomech_id": 1
        },
        {
            "promomech_name": "Price Discount - @Price Point",
            "promomech_code": "atpp",
            "promomech_id": 3
        },
        {
            "promomech_name": "Price Discount - Strike old show new",
            "promomech_code": "sosn",
            "promomech_id": 4
        },
        {
            "promomech_name": "Price Discount - second @Price Point",
            "promomech_code": "satpp",
            "promomech_id": 5
        }
    ],
    "status": "OK",
    "http_code": 200
}

  public discount_mechanic(id:any, seg:any): Observable<any> {
    let body={"promo_id": id, "segment_id": seg};
    //return this.httpclient.post("http://127.0.0.1:8000/scenario_planner/promomechanics",body);
    return of(this.promomechanics)
  }

  public discountchannel(): Observable<any> {
    //return this.httpclient.get("http://127.0.0.1:8000/offer_configuration/promochannel/");
    return of(this.promochannel);
  }

  promochannel:any =
{
    data: [
        {
            "promo_id": 1,
            "promo_name": "Online",
            "channel_code": "digital"
        },
        {
            "promo_id": 2,
            "promo_name": "Offline",
            "channel_code": "offline"
        }
    ],
    status: "OK",
    http_code: 200
}

segments:any =
{
    "data": [
        {
            "segment_id": 1,
            "segment_name": "Mass Online",
            "promo_id": 1,
            "user_count": 14020724
        },
        {
            "segment_id": 2,
            "segment_name": "Pre-registration",
            "promo_id": 1,
            "user_count": null
        },
        {
            "segment_id": 3,
            "segment_name": "Active - Low Frequency",
            "promo_id": 1,
            "user_count": 1704646
        },
        {
            "segment_id": 4,
            "segment_name": "Active - High Frequency Low Offers Low Check",
            "promo_id": 1,
            "user_count": 174217
        },
        {
            "segment_id": 5,
            "segment_name": "Active - High Frequency Low Offers High Check",
            "promo_id": 1,
            "user_count": 139830
        },
        {
            "segment_id": 6,
            "segment_name": "Active - High Frequency High Offers",
            "promo_id": 1,
            "user_count": 699408
        },
        {
            "segment_id": 7,
            "segment_name": "Lapsing - At least one transaction",
            "promo_id": 1,
            "user_count": 838733
        },
        {
            "segment_id": 8,
            "segment_name": "Inactive - At least one transaction",
            "promo_id": 1,
            "user_count": 4378230
        },
        {
            "segment_id": 9,
            "segment_name": "Offline",
            "promo_id": 2,
            "user_count": null
        },
        {
            "segment_id": 10,
            "segment_name": "Enrollment - Early beginners",
            "promo_id": 1,
            "user_count": 47127
        },
        {
            "segment_id": 11,
            "segment_name": "Enrollment - Late start",
            "promo_id": 1,
            "user_count": 165874
        },
        {
            "segment_id": 12,
            "segment_name": "Lapsing - No transactions",
            "promo_id": 1,
            "user_count": 227040
        },
        {
            "segment_id": 13,
            "segment_name": "Inactive - No Transactions",
            "promo_id": 1,
            "user_count": 5645619
        }
    ],
    "status": "OK",
    "http_code": 200
}


  public segment(): Observable<any> {
    //return this.httpclient.get("http://127.0.0.1:8000/offer_configuration/all/segments");
    return of(this.segments);
  }

  promotypes:any =
{
    "data": [
        {
            "promo_type_name": "Individual",
            "promo_type_code": "ind",
            "promo_type_id": 1
        },
        {
            "promo_type_name": "Individual - Pair",
            "promo_type_code": "ind-pair",
            "promo_type_id": 5
        },
        {
            "promo_type_name": "Pair",
            "promo_type_code": "pair",
            "promo_type_id": 2
        },
        {
            "promo_type_name": "Set of 2",
            "promo_type_code": "set2",
            "promo_type_id": 3
        },
        {
            "promo_type_name": "Set of 3",
            "promo_type_code": "set3",
            "promo_type_id": 4
        }
    ],
    "status": "OK",
    "http_code": 200
}

  public product_type(id:any, seg:any, mech:any): Observable<any> {
    let body={"promo_id": id, "segment_id": seg, "promomech_id": mech};
    //return this.httpclient.post("http://127.0.0.1:8000/scenario_planner/promotypes",body);
    return of(this.promotypes)
  }

  mockitem:any =
{
    "data": [
        {
            "item_name": "BF Chicken Fresh McMuffin",
            "item_code": "1030",
            "item_id": 2,
            "category_id": 1,
            "promo_type_id": 1,
            "promo_type_code": "ind"
        },
        {
            "item_name": "BF Double Fresh McMuffin",
            "item_code": "1029",
            "item_id": 1,
            "category_id": 1,
            "promo_type_id": 1,
            "promo_type_code": "ind"
        },
        {
            "item_name": "BF Double Sausage & Egg McMuffin",
            "item_code": "1022",
            "item_id": 44,
            "category_id": 1,
            "promo_type_id": 1,
            "promo_type_code": "ind"
        },
        {
            "item_name": "BF Fresh McMuffin",
            "item_code": "1021",
            "item_id": 43,
            "category_id": 1,
            "promo_type_id": 1,
            "promo_type_code": "ind"
        },
        {
            "item_name": "BF Hash Brown",
            "item_code": "1033",
            "item_id": 24,
            "category_id": 1,
            "promo_type_id": 1,
            "promo_type_code": "ind"
        },
        {
            "item_name": "BF Sausage & Egg McMuffin",
            "item_code": "1011",
            "item_id": 141,
            "category_id": 1,
            "promo_type_id": 1,
            "promo_type_code": "ind"
        },
        {
            "item_name": "BF Sausage McMuffin w/o egg",
            "item_code": "1020",
            "item_id": 42,
            "category_id": 1,
            "promo_type_id": 1,
            "promo_type_code": "ind"
        },
        {
            "item_name": "DRh Cappuccino Small",
            "item_code": "7152",
            "item_id": 29,
            "category_id": 12,
            "promo_type_id": 1,
            "promo_type_code": "ind"
        },
        {
            "item_name": "DS McFlurry Chocolate-Caramel (12)",
            "item_code": "4116",
            "item_id": 53,
            "category_id": 9,
            "promo_type_id": 1,
            "promo_type_code": "ind"
        },
        {
            "item_name": "FR Large Wedges",
            "item_code": "3079",
            "item_id": 37,
            "category_id": 8,
            "promo_type_id": 1,
            "promo_type_code": "ind"
        },
        {
            "item_name": "S&S Greek Cheese Sticks",
            "item_code": "2518",
            "item_id": 51,
            "category_id": 5,
            "promo_type_id": 1,
            "promo_type_code": "ind"
        },
        {
            "item_name": "SN Big Mac",
            "item_code": "2100",
            "item_id": 11,
            "category_id": 4,
            "promo_type_id": 1,
            "promo_type_code": "ind"
        },
        {
            "item_name": "SN Big Tasty",
            "item_code": "2004",
            "item_id": 5,
            "category_id": 4,
            "promo_type_id": 1,
            "promo_type_code": "ind"
        },
        {
            "item_name": "SN Caesar Wrap",
            "item_code": "2086",
            "item_id": 10,
            "category_id": 4,
            "promo_type_id": 1,
            "promo_type_code": "ind"
        },
        {
            "item_name": "SN Chicken McNuggets 4 pcs",
            "item_code": "2350",
            "item_id": 39,
            "category_id": 7,
            "promo_type_id": 1,
            "promo_type_code": "ind"
        },
        {
            "item_name": "SN Chicken McNuggets 6 pcs",
            "item_code": "2351",
            "item_id": 31,
            "category_id": 7,
            "promo_type_id": 1,
            "promo_type_code": "ind"
        },
        {
            "item_name": "SN Chicken strips_3 pcs",
            "item_code": "2230",
            "item_id": 46,
            "category_id": 5,
            "promo_type_id": 1,
            "promo_type_code": "ind"
        },
        {
            "item_name": "SN Chickenburger",
            "item_code": "2302",
            "item_id": 18,
            "category_id": 4,
            "promo_type_id": 1,
            "promo_type_code": "ind"
        },
        {
            "item_name": "SN Double Cheeseburger",
            "item_code": "2011",
            "item_id": 7,
            "category_id": 4,
            "promo_type_id": 1,
            "promo_type_code": "ind"
        },
        {
            "item_name": "SN McChicken Premier",
            "item_code": "2184",
            "item_id": 45,
            "category_id": 5,
            "promo_type_id": 1,
            "promo_type_code": "ind"
        },
        {
            "item_name": "SN Royal Cheeseburger",
            "item_code": "2060",
            "item_id": 8,
            "category_id": 4,
            "promo_type_id": 1,
            "promo_type_code": "ind"
        },
        {
            "item_name": "SN Royal Deluxe",
            "item_code": "2222",
            "item_id": 13,
            "category_id": 4,
            "promo_type_id": 1,
            "promo_type_code": "ind"
        }
    ],
    "status": "OK",
    "http_code": 200
}

  public items(id:any, seg:any, mech:any, type:any): Observable<any> {
    let body={"promo_id": id, "segment_id": seg, "promomech_id": mech, "promo_type_id": type};
    //return this.httpclient.post("http://127.0.0.1:8000/scenario_planner/items",body);
    return of(this.mockitem)
  }

  mockPrices:any =
{
    "data": [
        {
            "price_id": 43,
            "item_code": "1021",
            "regular_price": 130,
            "min_discount_price": 39
        }
    ],
    "status": "OK",
    "http_code": 200
}
  public prices(code:any): Observable<any> {
    let body={"item_code": [code]};
    //return this.httpclient.post("http://127.0.0.1:8000/scenario_planner/item/prices",body);
    return of(this.mockPrices)
  }

  offer_duration:any =
{
    "data": [
        {
            "offer_duration_id": 1,
            "offer_week_name": "1 Week",
            "description": "1 week"
        },
        {
            "offer_duration_id": 2,
            "offer_week_name": "2 Week",
            "description": "2 weeks"
        }
    ],
    "status": "OK",
    "http_code": 200
}

  public discount_duration(): Observable<any> {
    //return this.httpclient.get("http://127.0.0.1:8000/offer_configuration/offer_duration/");
      return of(this.offer_duration);
  }

  config_master:any =
  {
      "data": {
          "offer_config_start_date_value": "1",
          "offer_config_end_date_value": "30",
          "lower_bond_perc": "0",
          "set_max_offer_default": "10",
          "discount_depth_range_min": "20",
          "discount_depth_range_max": "50",
          "discount_depth_min": "10",
          "discount_depth_max": "50",
          "no_of_offer_range_min": "5",
          "no_of_offer_range_max": "7",
          "no_of_offer_min": "1",
          "no_of_offer_max": "10",
          "competition_min_depth": "10",
          "competition_max_depth": "45",
          "competition_default_depth": "23",
          "default_min_start_date": "1",
          "default_max_start_date": "21",
          "support_email": "support.discount@mcdpricing.com",
          "created_at_date": "2",
          "faq_link": "https://collaborate.mcd.com/:b:/s/Segmentedoffers_Russia/ETushkNCA2RPtYP-9c0D1IwBSNICO2l0m6n8xVC_nxBWuw?e=aw1ZgX",
          "user_manual": "https://collaborate.mcd.com/:b:/s/Segmentedoffers_Russia/Ee-sx5qOuChJrZap1HTYWxABK7JC0MBwUOUYZ4dEAbROCw?e=8XTC5E",
          "training_video": "https://collaborate.mcd.com/:f:/s/Segmentedoffers_Russia/EqrcKPg4YltGo5Vih8V-MoEBmk5QHjaJg2MRvvLlQYeRWg?e=u5v48W"
      },
      "status": "success"
  
  }

  public getCongigurationService(): Observable<any> {
    //return this.httpclient.get("http://127.0.0.1:8000/offer_configuration/config_master/");
    return of(this.config_master)
  }


  public api(arr:any){

    return {
      "discount_channel": arr[0],
      "segment": {
          "segment_id": arr[1],
          "segment_name": arr[2],
          "promo_id": arr[3],
          "user_count": arr[4]
      },
      "discount_mechanic": {
          "promomech_name": arr[5],
          "promomech_code": arr[6],
          "promomech_id": arr[7]
      },
      "product_type": {
          "promo_type_name": arr[8],
          "promo_type_code": arr[9],
          "promo_type_id": arr[10]
      },
      "discount_depth": arr[11],
      "regular_price": arr[12],
      "min_discount_price": arr[13],
      "discount_price": arr[14],
      "items": [
          {
              "item_name": arr[15],
              "item_code": arr[16],
              "item_id": arr[17],
              "category_id": arr[18],
              "promo_type_id": arr[10],
              "promo_type_code": arr[9]
          }
      ],
      "promo_name": arr[19],
      "scenario_unique_id": arr[20]
  }

  }

  configuration:any = []; 
  accumulateData(Arr:any)
  {

    this.configuration.push(this.api(Arr));
    // console.log(count);
    console.log("Segment Configuration:", this.configuration);

    // console.log(this.api(Arr));
    // this.configuration = this.api(Arr) + ","
    // console.log(this.configuration);
    // this.configuration.append[(this.api(Arr),",")];
    // this.configuration.join(",");
    return this.configuration;
     
  }

  public saveAPI(comp_disc:any, scn_name:any, dis_duration:any, str_date:any): Observable<any> {
    
    // let seg_config = this.api(arr1);    
    // let val=[];

    let body=
    {
      "segment_configuration": this.configuration,
      "competition_discount": [],
      "scenario_name": scn_name,
      "discount_duration": dis_duration,
      "start_date": str_date
  }
    return this.httpclient.post(
      "http://127.0.0.1:8000/scenario_planner/save/2",body);
  }

}
