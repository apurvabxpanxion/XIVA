import { Component, OnInit } from '@angular/core';
import {LoginDataService} from "./../../../service/login-data.service";

@Component({
  selector: 'app-dashboard-profile',
  templateUrl: './dashboard-profile.component.html',
  styleUrls: ['./dashboard-profile.component.css']
})
export class DashboardProfileComponent implements OnInit {
 newEmail:string;
 newName:string;
  constructor(private logindata: LoginDataService) { }

  ngOnInit() {
    this.newEmail=this.logindata.getemail();
    this.newName=this.logindata.getName();
  }
}
