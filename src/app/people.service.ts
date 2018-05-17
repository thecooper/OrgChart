import { Injectable } from '@angular/core';
import { Person } from './person';

@Injectable()
export class PeopleService {

  private peopleStore : Person[] = [
    {
      id : 1,
      name : "George Washington",
      subordinateIds : [2, 3]
    },
    {
      id : 2,
      name : "Benjamin Franklin",
      subordinateIds : [4, 5]
    },
    {
      id : 3,
      name : "Abraham Lincoln",
      subordinateIds : [6]
    },
    
    {
      id : 4,
      name : "William Shakespeare",
      subordinateIds : []
    },
    {
      id : 5,
      name : "John Doe",
      subordinateIds : []
    },
    {
      id : 6,
      name : "General Robert E. Lee",
      subordinateIds: []
    }
  ];

  constructor() {
    
  }

  all() : Person[] {
    return this.peopleStore;
  }
}
