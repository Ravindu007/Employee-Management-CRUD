import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  baseUrl : string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }

  getAllEmployees() : Observable<Employee[]>{
    return this.http.get<Employee[]>(this.baseUrl + '/api/Employee');
  }

  getSingleEmployee(id:string): Observable<Employee> {
    return this.http.get<Employee>(this.baseUrl + '/api/Employee/' + id)
  }

  addEmployee(addEmployeeRequest: Employee) : Observable<Employee>{
    addEmployeeRequest.id = "00000000-0000-0000-0000-000000000000"
    return this.http.post<Employee>(this.baseUrl + '/api/Employee', addEmployeeRequest);
  }

  updateEmployee(id:string, updatedEmployeeRequest: Employee):Observable<Employee> {
    return this.http.put<Employee>(this.baseUrl + '/api/Employee/' + id, updatedEmployeeRequest)
  }


  deleteEmployee(id:string): Observable<Employee>{
    return this.http.delete<Employee>(this.baseUrl + '/api/Employee/' + id)
  }
}
