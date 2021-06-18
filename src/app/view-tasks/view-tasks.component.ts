import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Task } from '../tasks/task';

@Component({
  selector: 'app-view-tasks',
  templateUrl: './view-tasks.component.html',
  styleUrls: ['./view-tasks.component.css']
})
export class ViewTasksComponent implements OnInit {

  constructor(private dataService : DataService) { }

  ngOnInit(): void {
  }

  taskArray : Array<Task> = this.dataService.getTaskArray();

  deleteTask(tsk : Task){
    this.dataService.delTask(tsk);
  }

  editTask(tsk:Task){
    console.log("in edit fun in view-tasks");
    // a:string : tsk.authorName;
    // tn:string : tsk.taskName;
    // td:string : tsk.taskDes;
    // cd : tsk.created;
    console.log(tsk);
    this.dataService.editTask(tsk);
  }

}
