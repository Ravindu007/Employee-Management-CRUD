import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/models/employee.model';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {

    addEmployeeRequest : Employee = {
      id:'',
      name: '',
      role:'', 
      department:'',
      email:'',
      phone:0
    }

    constructor(private employeeService: EmployeesService, private router:Router){}

    addEmployee(){
      this.employeeService.addEmployee(this.addEmployeeRequest)
      .subscribe({
        next: (response) => {
          this.router.navigate(['']);
        }
      })
    }
}
