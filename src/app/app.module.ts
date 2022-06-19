import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GoogleLoginProvider, FacebookLoginProvider, SocialAuthServiceConfig, SocialLoginModule } from '@abacritt/angularx-social-login';
import { environment } from '../environments/environment';
import { AuthModule } from '@auth0/auth0-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule.forRoot({
      domain: environment.AUTH0_CONFIG.domain,
      clientId: environment.AUTH0_CONFIG.clientId,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
