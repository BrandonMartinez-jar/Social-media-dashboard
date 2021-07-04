import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SocialMainComponent } from './social-main/social-main.component';
import { SocialRecentComponent } from './social-recent/social-recent.component';

@NgModule({
  declarations: [
    AppComponent,
    SocialMainComponent,
    SocialRecentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
