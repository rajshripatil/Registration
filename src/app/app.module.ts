import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './material.module';
import { MasterComponent } from './header/master.component';
import { CourseComponent } from './course/course.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { myRoute } from './route.config';
import { WelcomeComponent } from './welcome/welcome.component';
import { PersonalComponent } from './personaldetails/personaldetails.component';



@NgModule({
  declarations: [
    AppComponent,
    MasterComponent,
    CourseComponent,
    FooterComponent,
    WelcomeComponent,
    PersonalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
