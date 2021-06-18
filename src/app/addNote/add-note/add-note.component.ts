import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Task } from 'src/app/tasks/task';

import { FlashMessagesService } from 'angular2-flash-messages';

import { NotificationsService } from 'angular2-notifications';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
})
export class AddNoteComponent implements OnInit {

  //taskForm : FormGroup;

  task:Task = {
    authorName: '',
    taskName : '',
    taskDes : ''
  }

  binding:string = '';

  constructor(private dataService : DataService, private flashmsg : FlashMessagesService, private notifiService : NotificationsService) {

   }

  ngOnInit(): void {
    this.dataService.successfulTransfer.subscribe((data) =>{
      console.log(data);
      this.renderedData(data);
    })
  }

  onSubmit(){
    this.dataService.addTask(this.task);
    this.task = {
      authorName : '',
      taskName : '',
      taskDes : ''
    }
  }

  // onSuccess(){
  // this.flashmsg.show('Hurrayyy!!!! Added yout task successfully. You can view your taks in "View Tasks" tab.', {
  //   cssClass: 'alert alert-success',
  //   timeout : 2000
  // });
  // }

  onSuccess(){
    this.notifiService.success("Hurrayyy!!!!", ' Added your task successfully. Check out "View Tasks" to view tasks', {
      position: ["top", "right"],
      timeOut : 2000,
      animate : 'fade',
      showProgressBar : true,
    });
  }

  renderedData(data:Task){
    console.log('Inisde rendered data',data);
    this.dataService.successfulTransfer.subscribe(data)
    this.task.authorName = data.authorName;
    console.log("assigned ",this.task);
    this.task = {...this.task};
    this.binding = data.authorName;
  }

}
 
// this.flashmsg.success('Successfully Added!!!', "Added your Task. You can view your tasks in 'View Tasks' tab", {
//   position : ['top', 'right'],
//   timeOut: 2000,
//   animate: 'fade',
//   showProgressBar : true
// });