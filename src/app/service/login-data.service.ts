import { Injectable } from '@angular/core';

@Injectable()
export class LoginDataService {
public email:any;
public name:string;
  constructor() { }
  setLoginData(email: string,name:string){
    this.email=email;
    this.name=name;
  }
  getemail(){
    return this.email;
  }
  getName(){
    return this.name;
  }

}
