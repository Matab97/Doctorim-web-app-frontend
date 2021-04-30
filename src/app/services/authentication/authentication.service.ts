import { Injectable } from '@angular/core';
import { SignInData } from 'src/app/models/signinData';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})



export class AuthenticationService {

  private readonly mockedUser = new SignInData('0647068863', 'test');
  isAuthenticated = false;

  constructor(private router: Router) { }

  authenticate(signInData: SignInData): boolean {
    if(this.checkcredentials(signInData)) {
      this.isAuthenticated = true;
      this.router.navigate(['home']);
      return true;
    }
    this.isAuthenticated = false;
    return false;
  } 

  private checkcredentials(signInData: SignInData): boolean {
    return this.checkTel(signInData.getTel()) && this.checkPassword(signInData.getPassword());
  }

  private checkTel(tel: string): boolean {
    return tel === this.mockedUser.getTel();
  }

  private checkPassword(password: string): boolean {
    return password === this.mockedUser.getPassword();
  }

  logout() {
  
    this.isAuthenticated = false;
    this.router.navigate(['']);
  
  }

  
}
