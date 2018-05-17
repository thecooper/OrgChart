import { Person } from "./person";
import { PeopleService } from "./people.service";

export class OrgTree {
    head : OrgTreeNode;
    buildComplete : boolean = false;
    valid : boolean = true;
  
    constructor() { }
    
    build(people : Person[]) : void {
        // Build list of all nodes
        let nodes : OrgTreeNode[] = [];

        for(var peopleIndex = 0; peopleIndex < people.length; peopleIndex++) {
            let newNode = new OrgTreeNode();        
            newNode.value = people[peopleIndex];
            nodes.push(newNode);
        }

        for(var i = 0; i < nodes.length; i++) {
            let parentNode : OrgTreeNode = nodes.find(node => node.value.subordinateIds.indexOf(nodes[i].value.id) !== -1);
            nodes[i].parentNode = parentNode || null;

            for(var j = 0; j < nodes[i].value.subordinateIds.length; j++) {
                let matchedSubordinateNode : OrgTreeNode = nodes.find(node => node.value.id === nodes[i].value.subordinateIds[j]);
                if(matchedSubordinateNode) {
                    nodes[i].subordinateNodes.push(matchedSubordinateNode);
                }
            }
        }

        let headNode = nodes.find(node => node.parentNode === null);

        if(headNode) {
            this.head = headNode;
            this.buildComplete = true;
        }
        else {
            this.valid = false;
            console.error("Could not determine the head of the organizational chart!");
        }
    }
}

export class OrgTreeNode {
    parentNode : OrgTreeNode;
    value : Person;
    subordinateNodes : OrgTreeNode[];

    constructor() { this.subordinateNodes = []; }
}