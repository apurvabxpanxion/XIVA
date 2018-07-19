import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  aboutArray: any[]= [{href:"#pricing", aboutlink:"Pricing"},
                      {href:"http://blog.easyhire.me", aboutlink:"Blog"},
                      {href:"#", aboutlink:"Request Demo"},
                      {href:"#", aboutlink:"Contact us"}];

  support: any[]= [{href:"/toc.html", aboutlink:"Terms and Conditions"},
                      {href:"/privacy.html", aboutlink:"Privacy Policy"},
                      {href:"https://easyhire.freshdesk.com/support/home", aboutlink:"Helpdesk"}];

  fallowus: any[]= [{href:"https://www.facebook.com/easyhire.me", aboutlink:"Facebook", src:"/images/icons/socials/facebook.svg"},
                      {href:"https://twitter.com/EasyHire_Me", aboutlink:"Twitter", src:"/images/icons/socials/twitter.svg"},
                      {href:"https://www.linkedin.com/company/easyhire-me", aboutlink:"Linkedin", src:"/images/icons/socials/linkedin.svg"}];

  intouch: any[]= [{href:"tel:+16504508361", aboutlink:"+91 986 011 9606"},
                      {href:"mailto:sales@easyhire.me", aboutlink:"apurvab@xpanxion.co.in"}];
                     
                     

  constructor() { }

  ngOnInit() {
  }

}
