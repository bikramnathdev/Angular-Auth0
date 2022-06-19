import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { switchMap, tap } from 'rxjs/operators';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private aut0Service: AuthService
  ) { }

  ngOnInit(): void {
  }

  auth0SignIn() {
    this.aut0Service.loginWithPopup().pipe(
      switchMap(() => this.aut0Service.getAccessTokenSilently()),
      tap((accessToken) => {
        localStorage.setItem('auth0AccessToken', accessToken);
      }),
      switchMap(() => this.aut0Service.getIdTokenClaims())
    ).subscribe(
      data => {
        console.log(data);
      }
    )
  }

}
