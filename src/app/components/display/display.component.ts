import { Component,OnInit } from '@angular/core';
import { Wallet } from 'src/app/model/Wallet';
import { WalletbackendService } from 'src/app/service/walletbackend.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent {
wallet:Wallet[]=[];
msg: string = "";
  errorMsg: string = "";

  constructor(private router: Router, private employeeBackEndService: WalletbackendService) { } //DI

  ngOnInit(): void {
    //  this.employees =  this.employeeService.getAllEmployees(); // load data from service to local array

    this.employeeBackEndService.getAllEmployees().subscribe(
      {
        next: (data) => {
          console.log(data);
          this.wallet = data;
        },
        error: (err) => {
          console.log(err);

        },
        complete: () => { }
      }
    )
  }

  deleteEmployee(id?: number): void {
    console.log("Delete emp id:" + id);
    if (window.confirm("Do you want to delete Employee >?"))
      this.employeeBackEndService.deleteEmployeeById(id).subscribe(
        {
          next: (data) => { // success
            this.msg = "Employee Deleted Successfully . Id:" + id;
            this.errorMsg = "";
            // to filter the employee having delted id

            this.wallet = this.wallet.filter((emp) => {
              console.log("emp.id:" + emp.id);
              console.log("id:" + id);

              if (emp.id != id) {
                console.log("true :" + emp.id);
                return true;
              }

              else {
                console.log("false :" + emp.id);
                return false;

              }

            }
            );
            console.log(this.wallet);
            // reload all employees
          },
          error: () => {
            this.errorMsg = "Employee Could not be deletd.";
            this.msg = "";
          },
          complete: () => { }
        }
      )

  }

  updateEmployee(emp: Wallet) {
    console.log("Update emp");
    console.log(emp);
    //this.router.navigate(['details',this.name]);
    this.router.navigate(['update', emp.id]);
  }
}
