import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { BannerComponent } from '../banner/banner.component';
import { ModalComponent } from '../modal/modal.component';
import { FeaturebarComponent } from '../featurebar/featurebar.component';
import { PlansComponent } from '../plans/plans.component';
import { FooterComponent } from '../footer/footer.component';
import { CompanysliderComponent } from '../companyslider/companyslider.component';
import { NG_VALIDATORS, Validator, FormControl, ValidationErrors } from '@angular/forms';
@Component({
  selector: 'app-website',
  templateUrl: './website.component.html',
  styleUrls: ['./website.component.css']
})
export class WebsiteComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
