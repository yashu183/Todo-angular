import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { renderingVars } from '../render/renderingVar';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  isAdd:boolean = true;
  isView:boolean = false;

  @Output() valuesFromChild:EventEmitter<renderingVars> = new EventEmitter()

  renVar:renderingVars = {
    isAdd : true,
    isView : false
  }

  constructor() { }

  ngOnInit(): void {
  }

  loadAddTask(){
    this.isAdd = true;
    this.isView = false;
    //it's executing!!!
    this.renVar= {
      isAdd : this.isAdd,
      isView : this.isView
    }
    this.valuesFromChild.emit(this.renVar);
  }

  loadViewTask(){
    this.isAdd = false;
    this.isView = true;
   //its executing!!!
   this.renVar= {
    isAdd : this.isAdd,
    isView : this.isView
  }
    this.valuesFromChild.emit(this.renVar);
  }

}
