import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Injectable } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Task } from '../tasks/task';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  @Output() successfulTransfer = new EventEmitter<Task>();
  
  taskArray:Array<Task> = [];
  
  tskWithDate: Task ={
    taskName:'',
    taskDes:'',
    authorName:'',
    created: new Date()
  }

  constructor() { }

  addTask(tsk:Task){
    //done --> its executing
    this.tskWithDate = {
      taskName:  tsk.taskName,
      taskDes : tsk.taskDes,
      authorName : tsk.authorName,
      created : new Date()
    }
  this.taskArray.push(this.tskWithDate);
  tsk = {
    authorName:'',
    taskName : '',
    taskDes : ''
  }
  }

  getTaskArray(){
    return this.taskArray;
  }

  delTask(tsk:Task){
    var removeIndex = this.taskArray.map(function(item:Task) { return item.taskName; }).indexOf(tsk.taskName);
    this.taskArray.splice(removeIndex, 1);
  }

  editTask(tsk:Task){
    console.log("in edit of data service");
    console.log(tsk);
    this.successfulTransfer.emit(tsk);
  }
}
