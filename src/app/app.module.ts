import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './routes/app.routing';

import { AppComponent } from './app.component';
import { LayoutComponent } from './components/common/layout/layout.component';
import { HomeComponent } from './components/home/home.component';
import { SERVICES } from './services/services';
import { FooterComponent } from './components/common/footer/footer.component';
import { HeaderComponent } from './components/common/header/header.component';
import { SignupComponent } from './components/signup/signup.component';
import { BreadcrumbComponent } from './components/common/breadcrumb/breadcrumb.component';
import { ErrorPanelComponent } from './components/common/error-panel/error-panel.component';
import { LoginComponent } from './components/login/login.component';
import { JwtInterceptor } from './helpers/jwt.interceptor';
import { ErrorInterceptor } from './helpers/error.interceptor';
import { ListTeamComponent } from './components/team/list-team/list-team.component';
import { CreateTeamComponent } from './components/team/create-team/create-team.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    SignupComponent,
    BreadcrumbComponent,
    ErrorPanelComponent,
    LoginComponent,
    ListTeamComponent,
    CreateTeamComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [
    SERVICES,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
