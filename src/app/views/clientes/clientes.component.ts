import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss'],
})
export class ClientesComponent implements OnInit {
  clientes: Employee[] = [];

  constructor(private service: EmployeesService) {}

  ngOnInit() {
    this.service.getAllEmployees().subscribe((response) => {
      this.clientes = response;
    });
  }

  editClient(cliente: Employee) {
    console.log(cliente);
  }

  deleteClient(cliente: Employee) {
    console.log(cliente);
  }

  displayedColumns: string[] = [
    'firstName',
    'lastName',
    'email',
    'phone',
    'position',
    'salary',
    'actions'
  ];
}
