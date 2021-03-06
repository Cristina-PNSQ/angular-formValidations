import {Component} from '@angular/core';
import {Employee} from "../models/employee.model"

@Component({
  selector: 'home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  languages : string[] =["English", "Spanish", "Others"];
  model : Employee = new Employee("cristina", "PNSQ");
  
  firstNameToUpperCase (value: string){
    if(value.length > 0)
    {
      this.model.firstName = value.charAt(0).toUpperCase() + value.slice(1);
    }
    else
    {
      this.model.firstName = value;
    }
  }
}
