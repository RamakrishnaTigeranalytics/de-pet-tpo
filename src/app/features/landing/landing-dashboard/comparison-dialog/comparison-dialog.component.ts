import { Component, EventEmitter, Input, OnInit, Output  } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-comparison-dialog',
  templateUrl: './comparison-dialog.component.html',
  styleUrls: ['./comparison-dialog.component.scss']
})
export class ComparisonDialogComponent implements OnInit {
  @Input() item: any;
  @Output() result: any = new EventEmitter();


  constructor( private appservice:AppService) { }

  ngOnInit(): void {
  }

  arr:number[]=[];
  counter=-1;
  boxhandler()
  {
    // this.counter=this.counter+1;
    // this.arr[this.counter]=this.item.offer_config_id;
    let result = {name:this.item.offer_package_name, id:this.item.offer_config_id};
    this.result.emit(result);
    console.log('result:', result);
    // console.log(this.counter)
    // this.offerConfigID_1=this.item.offer_config_id;
    // for(var j=0;j<this.counter;j++)
    // console.log("Display:",this.offerConfigID_1);
    // console.log("Display:",this.arr[j]);
    
  }

}
