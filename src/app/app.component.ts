import { Component } from '@angular/core';
 
import { renderingVars } from './render/renderingVar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ToDo';
  isAdd:boolean = true;
  isView:boolean = false;
  valuesFromChild(value:renderingVars){
  //it's executring!!!
  console.log(value);
  this.isAdd = value.isAdd;
  this.isView = value.isView;
  }

}
