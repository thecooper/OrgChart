import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { OrganizationComponent } from './organization/organization.component';
import { PersonComponent } from './person/person.component';
import { PeopleService } from './people.service';
import { CanvasComponent } from './canvas/canvas.component';
import { CanvasService } from './canvas.service';


@NgModule({
  declarations: [
    AppComponent,
    OrganizationComponent,
    PersonComponent,
    CanvasComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ PeopleService, CanvasService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
