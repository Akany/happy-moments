import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RecentMomentsComponent } from './recent-moments/recent-moments.component';
import { MomentComponent } from './recent-moments/moment/moment.component';

@NgModule({
  declarations: [
    AppComponent,
    RecentMomentsComponent,
    MomentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
