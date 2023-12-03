import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit{

  employees : Employee[] = [
    {
      id:'14257895-2542-4563-1585-145236875635',
      name: 'Ravindu Dharmadasa',
      role: 'Software Engineer' ,
      department: 'SE',
      email: 'ravindu0504@gmail.com',
      phone:778581137
    }
  ]; 

  constructor(){}

  ngOnInit(): void {
  }

}
