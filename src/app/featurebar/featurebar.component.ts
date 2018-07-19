import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-featurebar',
  templateUrl: './featurebar.component.html',
  styleUrls: ['./featurebar.component.css']
})
export class FeaturebarComponent implements OnInit {
  featurelists: any[] =['Automate with On-Demand Interviews','Leverage Team Collaboration','Advanced Testing Methods'];
  constructor() { }

  ngOnInit() {
  }

}
