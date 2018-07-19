import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.css']
})
export class PlansComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
   
  toggle_1:boolean=false
  toggle_2:boolean=false
  toggle_3:boolean=false

  toggleFunction=(val:number)=>{

  if(val===1){
    this.toggle_1=true;
    this.toggle_2=false;
    this.toggle_3=false
  }
  else if(val===2){
    this.toggle_1=false;
    this.toggle_2=true;
    this.toggle_3=false
  }

  else if(val===3){
    this.toggle_1=false;
    this.toggle_2=false;
    this.toggle_3=true
  }
  }
}
