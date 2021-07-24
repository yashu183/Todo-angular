import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Task } from 'src/app/tasks/task';

import { FlashMessagesService } from 'angular2-flash-messages';

import { NotificationsService } from 'angular2-notifications';

import { ActivatedRoute } from '@angular/router';

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
    taskDes : '',
    created : undefined,
    edited : undefined
  }
  editedInfo : Task = {
    taskDes : '', 
    taskName : '',
    authorName : '',
    created : new Date(),
    edited : new Date(),
    hasDone : false
  };

  sample : string = '';

  constructor(private dataService : DataService, private flashmsg : FlashMessagesService, private notifiService : NotificationsService, public route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.editedInfo.taskDes = params["taskDes"];
      this.editedInfo.taskName = params["taskName"];
      this.editedInfo.authorName = params["authorName"];
      this.editedInfo.created = params["created"];
      this.editedInfo.edited = params["edited"];
      let sample:string = params["hasDone"];
      this.editedInfo.hasDone = sample.toLowerCase() === 'true';
      console.log(this.editedInfo, "editedInfo");
      this.task = this.editedInfo;
    });

   }

  ngOnInit(): void {

  // this.route.queryParams.subscribe(params => {
  //                         console.log(params, "logging params");
  //                         this.editedInfo = params.editedInfo;
  //                         console.log(this.editedInfo,"getting from query param");
  //                         console.log(this.editedInfo.taskName);
  //                       });

    console.log("inisde oninit of add-note");
    console.log("in onInIt of add-note and before subscribing", this.task);
    this.dataService.selectedTask.subscribe(tsk => {
      console.log(tsk, "getting from sub");
      // this.task = tsk;
    })
    console.log(this.task);
  }

  onSubmit(){
    console.log("inside onSubmit method...")
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
    // console.log('Inisde rendered data',data);
    // this.task.authorName = data.authorName;
    // console.log("assigned ",this.task);
    // this.task.authorName = data.authorName;
    this.dataService.selectedTask.subscribe(tsk => {
      console.log(tsk);
      this.task = tsk;
    })
  }

}
 
// this.flashmsg.success('Successfully Added!!!', "Added your Task. You can view your tasks in 'View Tasks' tab", {
//   position : ['top', 'right'],
//   timeOut: 2000,
//   animate: 'fade',
//   showProgressBar : true
// });