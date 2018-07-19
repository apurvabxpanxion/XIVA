import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { HttpClient } from '@angular/common/http';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {LoginDataService} from "./../service/login-data.service";
import {Router, ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
//   $:any;
//   fullname: string;
//   email:any;
//   constructor(private http: HttpClient, private logindata: LoginDataService, private router: Router){
//   }
//   onSubmit(value:any)
// {
//     const requestData = this.http.post('http://jsonplaceholder.typicode.com/posts', {
//     email:value.email,
//     fname:value.firstName,
//     lname:value.lastName,
//     phone:value.phone,
//     referred:value.referredBy,
//     password:value.password,
//     checked:value.tac_agree
//   })
   
//     .subscribe(
//       res => {
//         console.log("POST call successful value returned in body" , res);
//       },
//       err => {
//         console.log("Error occured");
//       }
//     );
//     this.fullname = value.firstName + " " +  value.lastName;
//     this.email=value.email;
//     this.logindata.setLoginData(this.email,this.fullname)
//     this.router.navigate(['./dashboard-profile']);

// }
// onSubmitAuth(value:any)
// {
//     const requestData = this.http.post('http://jsonplaceholder.typicode.com/posts', {
//       email:value.email
   
//   })
//     .subscribe(
//       res => {
//         console.log("POST call successful value returned in body" , res);
//       },
//       err => {
//         console.log("Error occured");
//       }
//     );
// }

//   ngOnInit() {
//     $('.login-signup-form, .manual-signup').removeAttr("novalidate");
//     $("input[name='tac_agree']").click(function(){
//       if ($(this).is(':checked')) {               
//            $('.disable').removeAttr("disabled"); 
                      
//         }    
//         else if ($(this).not(':checked')) { 
//           $('.disable').attr("disabled", "true");
//          }           
//       });
      
// }
model: any = {};
loading = false;
returnUrl: string;

constructor(
    private route: ActivatedRoute,
    private router: Router,
    ) { }

ngOnInit() {
    // reset login status

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    $('.login-signup-form, .manual-signup').removeAttr("novalidate");
        $("input[name='tac_agree']").click(function(){
          if ($(this).is(':checked')) {               
               $('.disable').removeAttr("disabled"); 
                          
            }    
            else if ($(this).not(':checked')) { 
              $('.disable').attr("disabled", "true");
             }           
          });
          
}

}
