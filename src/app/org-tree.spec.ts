import { OrgTree } from './org-tree';
import { Person } from './person';
import { OrgTreeNode } from './org-tree-node';

describe('Org tree', () => {
	let orgTree : OrgTree;

	beforeEach(()=>{
		orgTree = new OrgTree();
	})

	it('should have no head if empty persons passed to build()', () => {
		orgTree.build([]);
		expect(orgTree.head).toBeNull();
		expect(orgTree.valid).toBe(false);
	})

	it('should have a node for head which has no subordinateNodes', () => {
		let person = new Person();
		person.id = 1;
		person.name = 'Ben Franklin';
		person.subordinateIds = [];

		orgTree.build([person]);

		expect(orgTree.head).toBeTruthy();
		expect(orgTree.head.value).toBe(person);
	})

	it('should create head node that has subordinate', () => {
		let subordinate = new Person();
		subordinate.id = 2;
		subordinate.name = 'Jim';
		subordinate.subordinateIds = [];

		let supervisor = new Person();
		supervisor.id = 1;
		supervisor.name = 'Terry';
		supervisor.subordinateIds = [2];

		orgTree.build([subordinate, supervisor]);

		expect(orgTree.head.value).toBe(supervisor);
		let headNode : OrgTreeNode = orgTree.head;

		expect(orgTree.head.subordinateNodes[0].value).toBe(subordinate);
		expect(orgTree.head.subordinateNodes[0].parentNode).toBe(headNode);
	})
})