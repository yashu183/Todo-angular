import { Component, OnInit } from '@angular/core';
import { Task } from '../tasks/task';

@Component({
  selector: 'app-to-do-form',
  templateUrl: './to-do-form.component.html',
  styleUrls: ['./to-do-form.component.css']
})
export class ToDoFormComponent implements OnInit {

  showExtended:boolean = false;
  task:Task = {
    authorName:'',
    taskName : '',
    taskDes : ''
  }

  arr:Array<Task> = [];
  
  constructor() {
   }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log("in submit");
    this.showExtended = false;
    this.arr.push(this.task);
    this.task={
      authorName:'',
      taskName:'',
      taskDes:''
    }
  }

  onClick(){
    this.showExtended = true;
  } 

  deleteTask(tsk:Task){
    var removeIndex = this.arr.map(function(item:Task) { return item.taskName; }).indexOf(tsk.taskName);
    this.arr.splice(removeIndex, 1);
  }
}
