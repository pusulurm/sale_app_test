class TreeViewController {
	constructor(scope) {
		this.scope = scope;
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

	onNodeSelected(currentNode) {
		if (currentNode.selected) {
			currentNode.collapsed = !currentNode.collapsed;
			return;
		}
		this.scope.$emit('treeSelectionChanged', currentNode);
	}

	expandCurrentTree(node) {
		node.collapsed = !node.collapsed;
		if (!node.collapsed) {
			let parent = node.parent;
			while (parent) {
				parent.collapsed = false;
				parent = parent.parent;
			}
		}
	}

	$onInit() {
		var self = this;
		self.nodeList.forEach(node => {
			self.setParentOfChildNodes(node);
		})

		self.scope.$on("treeSelectionChanged", (event, args) => {
			if (self.isRootElement) {
				self.unselectAllNodes();
				let copy = self.findANodeByValue(this.nodeList, args.value);
				self.expandCurrentTree(copy);
				copy.selected = true;
				this.onSelectionChange(copy);
			}
		});
	}

	findANodeByValue(nodeArray, value) {
		var self = this, matchedNode = null;

		var findNode = function (nodes, value) {
			if (!matchedNode && nodes && nodes.length > 0) {
				nodes.forEach(item => {
					if (matchedNode) return;
					if (item.value === value) {
						matchedNode = item;
						return;
					}
					if (item.children && item.children.length > 0) {
						findNode(item.children, value);
					}
				})
			}
		}
		findNode(nodeArray, value);
		return matchedNode;
	}

	$onChanges(changes) {
		if (!changes.selectedNode.isFirstChange()) {
			this.scope.$emit('treeSelectionChanged', changes.selectedNode.currentValue);
		}
	}
}

TreeViewController.$inject = ['$scope'];

export default TreeViewController;
