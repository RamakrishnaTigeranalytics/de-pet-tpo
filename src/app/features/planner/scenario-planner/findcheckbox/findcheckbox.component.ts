import { Component, EventEmitter, OnInit, Output, } from '@angular/core';

@Component({
  selector: 'app-findcheckbox',
  templateUrl: './findcheckbox.component.html',
  styleUrls: ['./findcheckbox.component.scss']
})
export class FindcheckboxComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  enteredSearchValue: string = '';

  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>();

  onSearchTextChanged(){
    this.searchTextChanged.emit(this.enteredSearchValue);
  }

}
