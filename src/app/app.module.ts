import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { OrganizationComponent } from './organization/organization.component';
import { PersonComponent } from './person/person.component';
import { PeopleService } from './people.service';


@NgModule({
  declarations: [
    AppComponent,
    OrganizationComponent,
    PersonComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [ PeopleService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
