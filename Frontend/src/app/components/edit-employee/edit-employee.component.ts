import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from 'src/app/models/employee.model';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {

  employeeDetails : Employee = {
    id:'',
    name: '',
    role:'', 
    department:'',
    email:'',
    phone:0
  }

  constructor(private route:ActivatedRoute, private employeeService: EmployeesService){}


  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next:(params) => {
        const id = params.get('id');

        if(id){
          this.employeeService.getSingleEmployee(id)
            .subscribe({
              next: (response) => {
                this.employeeDetails = response;
              }
            })
        }
      }
    })
  }
}
