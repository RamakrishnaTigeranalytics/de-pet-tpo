import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LandingPageService {

  constructor(private http: HttpClient) {

   }
   fetchVal(){
    // return this.http.get<Product[]>('assets/data-promo-simulate-test.json');
    return this.http.get<any>('assets/load-scenario-mock.json')
 }
}
