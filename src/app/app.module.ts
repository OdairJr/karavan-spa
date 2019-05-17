import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './routes/app.routing';

import { AppComponent } from './app.component';
import { LayoutComponent } from './components/common/layout/layout.component';
import { HomeComponent } from './components/home/home.component';
import { SERVICES } from './services/services';
import { FooterComponent } from './components/common/footer/footer.component';
import { HeaderComponent } from './components/common/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent
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
