import { Component, OnInit, Input, ElementRef, ViewChild, QueryList, ViewChildren } from '@angular/core';
import { PeopleService } from '../people.service';
import { OrgTree, OrgTreeNode } from '../org-tree';
import { Person } from '../person';
import { PersonComponent } from '../person/person.component';

@Component({
  selector: 'app-organization-chart',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.scss']
})
export class OrganizationComponent {
  @Input() Node : OrgTreeNode;

  @ViewChild(PersonComponent) PersonComponent : PersonComponent;
  @ViewChildren(OrganizationComponent) OrganizationComponents : QueryList<OrganizationComponent>;

  constructor() {
    
  }

  ngAfterViewInit() {
    // console.log("In OrganizationComponent.ngAfterViewChecked()");
    this.OrganizationComponents.forEach(element => {
      element.PersonComponent.drawLineBetweenPeople(this.PersonComponent);
    });
  }
}
