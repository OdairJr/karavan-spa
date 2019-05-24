import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './routes/app.routing';

import { AppComponent } from './app.component';
import { LayoutComponent } from './components/common/layout/layout.component';
import { HomeComponent } from './components/home/home.component';
import { SERVICES } from './services/services';
import { FooterComponent } from './components/common/footer/footer.component';
import { HeaderComponent } from './components/common/header/header.component';
import { SignupComponent } from './components/signup/signup.component';
import { BreadcrumbComponent } from './components/common/breadcrumb/breadcrumb.component';
import { ErrorMessageComponent } from './components/common/error-message/error-message.component';
import { ErrorPanelComponent } from './components/common/error-panel/error-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    SignupComponent,
    BreadcrumbComponent,
    ErrorMessageComponent,
    ErrorPanelComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    SERVICES
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
