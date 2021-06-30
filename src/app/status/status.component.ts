import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Task } from '../tasks/task';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {

  constructor(private dataService1 : DataService) { 
    
  }

  ngOnInit(): void {
    this.dataService1.onChangeArray.subscribe((changedArray) => {
      console.log(changedArray,"changed Array");
      this.doShowOnChange(changedArray);
    })
  }

  totalChanged : number = 0;
  completedChanged : number = 0;
  pendingChanged : number = 0;

  totalPercent : number = 0;
  completedPercent : number = 0;
  pendingPercent : number = 0; 

  doShowOnChange(changedArray : Array<Task>){
    this.totalChanged = changedArray.length;
      changedArray.forEach(element => {
        if(element.hasDone === true){
          this.completedChanged += 1;
        }
      })
      this.pendingChanged = this.totalChanged - this.completedChanged;
      this.totalPercent = (this.totalChanged/this.totalChanged)*100;
      this.completedPercent = (this.completedChanged/this.totalChanged)*100;
      this.pendingPercent = (this.pendingChanged/this.totalChanged)*100;
      console.log(this.totalPercent, this.completedPercent, this.pendingPercent);
  }

}


//(this.completedChanged/this.totalChanged)*100

//(this.pendingChanged/this.totalChanged)*100