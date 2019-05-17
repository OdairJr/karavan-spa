import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './routes/app.routing';

import { AppComponent } from './app.component';
import { LayoutComponent } from './components/common/layout/layout.component';
import { HomeComponent } from './components/home/home.component';
import { SERVICES } from './services/services';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HomeComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule
  ],
  providers: [
    SERVICES
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
