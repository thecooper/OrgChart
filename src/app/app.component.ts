import { Component } from '@angular/core';
import { OrgTree, OrgTreeNode } from './org-tree';
import { PeopleService } from './people.service';
import { Person } from './person';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  headNode : OrgTreeNode = null;

  constructor(private _peopleService : PeopleService) { }

  ngOnInit() {
    let orgTree = new OrgTree();
    let people = this._peopleService.all();
    orgTree.build(people);
    this.headNode = orgTree.head;
  }
}
