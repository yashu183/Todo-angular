import { Injectable } from '@angular/core';
import { Task } from '../tasks/task';

import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  private taskSource = new BehaviorSubject<Task>({
    authorName : '',
    taskDes : '',
    taskName : ''
  })

  private taskSourceArray = new BehaviorSubject<Array<Task>>([])

  selectedTask = this.taskSource.asObservable();

  taskArray:Array<Task> = [];

  onChangeArray = this.taskSourceArray.asObservable();
  
  tskWithDate: Task ={
    taskName:'',
    taskDes:'',
    authorName:'',
    created: new Date()
  }

  tskWIthEdit : Task = {
    authorName : '',
    taskDes :'',
    taskName : '',
    created : new Date(),
    edited : new Date()
  }

  constructor() {
    this.taskSourceArray.next(this.taskArray);
   }

  addTask(tsk:Task){
    //done --> its executing
  if(tsk.edited != undefined){
    console.log("inside add Task of data service if part");
    var removeIndex = this.taskArray.map(function(item:Task) { return item.taskName; }).indexOf(tsk.taskName);
    this.taskArray.splice(removeIndex, 1);
    this.taskArray.push(tsk);
    //this.arrayTransfer.emit(this.taskArray); //status with output
  }
  else{
    console.log("iniside addtask method of data service else part");
    this.tskWithDate = {
      taskName:  tsk.taskName,
      taskDes : tsk.taskDes,
      authorName : tsk.authorName,
      created : new Date(),
      hasDone : false
    }
  this.taskArray.push(this.tskWithDate);
  //this.arrayTransfer.emit(this.taskArray); //status with output
  }
  // localStorage.setItem('tasks', JSON.stringify(this.taskArray));
  }

  getTaskArray(){
  //  this.taskSourceArray.next(this.taskArray);
  //  //sample:string 
  //  //this.taskArray = JSON.parse(localStorage.getItem('tasks'));
  //  this.taskArray = localStorage.getItem('tasks') != null ? JSON.parse(localStorage.getItem('tasks') as any) : [];
  //  if(localStorage.getItem('tasks') === null){
  //    this.taskArray = [];
  //  }
  //  else{
  //    this.taskArray = JSON.parse(localStorage.getItem('tasks'));
  //  }
    return this.taskArray;
  }

  delTask(tsk:Task){
    var removeIndex = this.taskArray.map(function(item:Task) { return item.taskName; }).indexOf(tsk.taskName);
    this.taskArray.splice(removeIndex, 1);
    //this.arrayTransfer.emit(this.taskArray);

    // this.taskArray = localStorage.getItem('tasks') != null ? JSON.parse(localStorage.getItem('tasks') as any) : [];
    // var removeIndex = this.taskArray.map(function(item:Task) { return item.taskName; }).indexOf(tsk.taskName);
    // this.taskArray.splice(removeIndex, 1);
    // localStorage.setItem('tasks', JSON.stringify(this.taskArray));

  }

  // editTask(tsk:Task){
  //   console.log("in edit of data service");
  //   console.log(tsk);
  //   this.arrayTransfer.emit(this.taskArray);
  // }
  
  setFormTask(tsk : Task){
    console.log("Inside setForm task...", tsk);
    this.tskWIthEdit = {
      authorName : tsk.authorName,
      taskName : tsk.taskName,
      taskDes : tsk.taskDes,
      created : tsk.created,
      edited : new Date(),
      hasDone : tsk.hasDone
    }
    console.log(this.tskWIthEdit);
    this.taskSource.next(this.tskWIthEdit);
  }
  usrLogged : string = '';
  loggedSuccessfully(usrname : string){
    this.usrLogged = usrname;
  }

}
