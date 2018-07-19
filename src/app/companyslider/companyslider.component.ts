import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-companyslider',
  templateUrl: './companyslider.component.html',
  styleUrls: ['./companyslider.component.css']
})
export class CompanysliderComponent implements OnInit {
  client: any[] =['assets/client1.png','assets/client2.png','assets/client3.png','assets/client4.png']
  constructor() { }

  ngOnInit() {
  }

}
