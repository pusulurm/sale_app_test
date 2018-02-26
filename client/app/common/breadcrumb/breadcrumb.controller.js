class BreadcrumbController {
	constructor(scope) {
		var self = this;
	}

	buildBreadcrumbValues(newNode) {
		if (!newNode || newNode.length === 0) {
			this.breadcrumbValues = [];
			return;
		}

		let values = [], nodeCopy = Object.assign({}, newNode);

		while (nodeCopy) {
			values.push(nodeCopy.value);
			nodeCopy = nodeCopy.parent;
		}

		this.breadcrumbValues = values.reverse();
	}

	getSelectedBreadcrumbNode(selectedIndex) {
		let nodeCopy = this.nodes, startIndex = this.breadcrumbValues.length-1;

		while (startIndex > selectedIndex) {
			nodeCopy = Object.assign({}, nodeCopy.parent);
			--startIndex;
		}

		this.breadcrumbValues.splice(selectedIndex+1, (this.breadcrumbValues.length - (selectedIndex+1)));
		
		if(this.onNodeClicked){
			this.onNodeClicked()(nodeCopy);
		}

		this.nodes = nodeCopy;
	}

	onClicked(index) {
		if (index === this.breadcrumbValues.length - 1) {
			//When user clicks on last item
			return;
		}
		this.getSelectedBreadcrumbNode(index);
	}

	$onInit() {
	}

	$onChanges(changes) {
		this.buildBreadcrumbValues(changes.nodes.currentValue);
	}
}

BreadcrumbController.$inject = ['$scope'];

export default BreadcrumbController;
