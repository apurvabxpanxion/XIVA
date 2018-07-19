import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BannerComponent } from './banner/banner.component';
import { ModalComponent } from './modal/modal.component';
import { CompanysliderComponent } from './companyslider/companyslider.component';
import { FeaturebarComponent } from './featurebar/featurebar.component';
import { PlansComponent } from './plans/plans.component';
import { FooterComponent } from './footer/footer.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { Route } from '@angular/compiler/src/core';
import { routing }        from './app.routing';
import { LoginComponent } from './login/index';
import { WebsiteComponent } from './website/website.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BannerComponent,
    ModalComponent,
    CompanysliderComponent,
    FeaturebarComponent,
    PlansComponent,
    FooterComponent,
    LoginComponent,
    WebsiteComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    routing
    // Angular2SocialLoginModule
    // BrowserAnimationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// Angular2SocialLoginModule.loadProvidersScripts(providers);
