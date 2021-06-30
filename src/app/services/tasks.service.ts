import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

import { Task } from '../tasks/task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  
  tasksCollection !: AngularFirestoreCollection<Task>;
  taskDoc!: AngularFirestoreDocument<Task>;
  tasks!:Observable<Task[]>;
  task!:Observable<Task>;

  constructor(private afs: AngularFirestore) {
    this.tasksCollection = this.afs.collection('tasks');
   }

   getTasks() : Observable<Task[]>{
      this.tasks = this.tasksCollection.snapshotChanges().map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as Task;
          data.id = action.payload.doc.id;
          return data;
        });
      });
      return this.tasks;
   }
}
