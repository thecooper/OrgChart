import { Person } from './person';

export class OrgTreeNode {
    parentNode : OrgTreeNode;
    value : Person;
    subordinateNodes : OrgTreeNode[];

    constructor() { this.subordinateNodes = []; }
}