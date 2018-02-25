class TreeViewController {
	constructor() {
	}

	setParentOfChildNodes(node){
		var self = this;
		if(node.children && node.children.length > 0){
			node.children.forEach(childNode =>{
				childNode.parent = node;
				self.setParentOfChildNodes(childNode);
			})
		}
	}

	unselectAChildNodes(node){
		var self = this;
		node.selected = false;
		if(node.children && node.children.length > 0){
			node.children.forEach(childNode =>{
				self.unselectAChildNodes(childNode);
			})
		}
	}

	unselectAllNodes(){
		var self = this;
		this.nodeList.forEach(node => {
			self.unselectAChildNodes(node);
		})
	}

	onNodeSelected(currentNode){
		currentNode.collapsed = !currentNode.collapsed;

		if(currentNode.selected){
			return;
		}

		this.unselectAllNodes();
		currentNode.selected = true;
		this.onSelectionChange(currentNode);
	}

	$onInit() {
		var self = this;
		self.nodeList.forEach(node =>{
			self.setParentOfChildNodes(node);
		})
	}
}

TreeViewController.$inject = [];

export default TreeViewController;
