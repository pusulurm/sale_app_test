class TreeViewController {
	constructor() {
	}

	setParentOfChildNodes(node) {
		var self = this;
		if (node.children && node.children.length > 0) {
			node.children.forEach(childNode => {
				childNode.parent = node;
				self.setParentOfChildNodes(childNode);
			})
		}
	}

	unselectAChildNodes(node) {
		var self = this;
		node.selected = false;
		node.collapsed = true;
		if (node.children && node.children.length > 0) {
			node.children.forEach(childNode => {
				self.unselectAChildNodes(childNode);
			})
		}
	}

	unselectAllNodes() {
		var self = this;
		this.nodeList.forEach(node => {
			self.unselectAChildNodes(node);
		})
	}

	onNodeSelected(currentNode, dontInformClient = false) {

		if (currentNode.selected) {
			currentNode.collapsed = !currentNode.collapsed;
			return;
		}

		this.unselectAllNodes();
		currentNode.collapsed = !currentNode.collapsed;
		currentNode.selected = true;
		if (!dontInformClient) {
			this.onSelectionChange(currentNode);
		}
	}

	$onInit() {
		var self = this;
		self.nodeList.forEach(node => {
			self.setParentOfChildNodes(node);
		})
	}

	getSelectedNodeFromList(selectedNode) {
		let selectedItem = null;

		//while (!selectedItem) {
			this.nodeList.forEach(item => {
				if (item.value === selectedNode.value) {
					selectedItem = item;
				}
			})
		//}
		return selectedItem;
	}

	$onChanges(changes) {
		// console.error('$onChanges fired');
		// if (!changes.selectedNode.isFirstChange()) {
		// 	console.error('$onChanges fired 123');
		// 	if (this.nodeList && this.nodeList.length > 0) {
		// 		console.error(changes.selectedNode);
		// 		let copy = this.getSelectedNodeFromList(changes.selectedNode);
		// 		this.onNodeSelected(copy, true);
		// 	}
		// }
	}
}

TreeViewController.$inject = [];

export default TreeViewController;
