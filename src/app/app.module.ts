import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { HappyMomentsRoutingModule } from './app-routing.module';
import { RecentMomentsComponent } from './home/recent-moments/recent-moments.component';
import { MomentComponent } from './home/recent-moments/moment/moment.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

@NgModule({
    declarations: [
        AppComponent,
        RecentMomentsComponent,
        MomentComponent,
        LoginComponent,
        HomeComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        MaterialModule.forRoot(),
        HappyMomentsRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
