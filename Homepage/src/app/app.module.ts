import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LinkGroupComponent } from './link-group/link-group.component';
import { LinkItemComponent } from './link-group/link-item/link-item.component';
import { HeaderComponent } from './header/header.component';
import { TempHumidityComponent } from './temp-humidity/temp-humidity.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LinkGroupComponent,
    LinkItemComponent,
    HeaderComponent,
    TempHumidityComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
