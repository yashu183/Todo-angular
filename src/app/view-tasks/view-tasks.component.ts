import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Task } from '../tasks/task';

import { Router } from '@angular/router';
import { NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-view-tasks',
  templateUrl: './view-tasks.component.html',
  styleUrls: ['./view-tasks.component.css']
})
export class ViewTasksComponent implements OnInit {

  constructor(private dataService : DataService, private router 
    : Router) { }

  ngOnInit(): void {
    //this.setCurrentCls();
  }

  taskArray : Array<Task> = this.dataService.getTaskArray();

  hasDone:boolean = false;

  deleteTask(tsk : Task){
    this.dataService.delTask(tsk);
  }
  currentTask : Task ={
    authorName : '',
    taskDes : '',
    taskName : ''
  };
  
  editTask(tsk:Task){
    console.log("in edit fun in view-tasks");
    console.log(tsk);
    //this.dataService.setFormTask(tsk);
    console.log(tsk.hasDone, "hasDone in editTask method");
    let navigationExtra: NavigationExtras = {
      queryParams:{
        "taskName" : tsk.taskName,
        "taskDes"  : tsk.taskDes,
        "authorName" : tsk.authorName,
        "created" : tsk.created,
        "edited" : new Date(),
        "hasDone" : tsk.hasDone
      }
    }
    this.router.navigate(['/edit'], navigationExtra);
  }

  markAsDone(tsk:Task){
    tsk.hasDone = !tsk.hasDone;
  }
  
  markAsUndone(tsk:Task){
    tsk.hasDone = !tsk.hasDone
  }
}
