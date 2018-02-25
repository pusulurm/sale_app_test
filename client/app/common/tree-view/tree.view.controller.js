class TreeViewController {
  constructor(scope, element, attrs, $compile) {
    //console.error('From TreView controler')
        var self = this;
        //tree id
				var treeId = attrs.treeId;
			
				//tree model
				var treeModel = 'treeView.' + attrs.treeModel;

				//node id
				var nodeId = attrs.nodeId || 'id';

				//node label
				var nodeLabel = attrs.nodeLabel || 'label';

				//children
				var nodeChildren = attrs.nodeChildren || 'children';

				//tree template
				var template =
					'<ul>' +
						'<li data-ng-repeat="node in ' + treeModel + '">' +
							'<i class="collapsed" data-ng-show="node.' + nodeChildren + '.length && node.collapsed" data-ng-click="' + treeId + '.selectNodeHead(node)"></i>' +
							'<i class="expanded" data-ng-show="node.' + nodeChildren + '.length && !node.collapsed" data-ng-click="' + treeId + '.selectNodeHead(node)"></i>' +
							'<i class="normal" data-ng-hide="node.' + nodeChildren + '.length"></i> ' +
							'<span data-ng-class="node.selected" data-ng-click="' + treeId + '.selectNodeLabel(node)">{{node.' + nodeLabel + '}}</span>' +
							'<div data-ng-hide="node.collapsed" data-tree-id="' + treeId + '" data-tree-model="node.' + nodeChildren + '" data-node-id=' + nodeId + ' data-node-label=' + nodeLabel + ' data-node-children=' + nodeChildren + '></div>' +
						'</li>' +
					'</ul>';


				//check tree id, tree model
				if( treeId && treeModel ) {

					//root node
					if( attrs.angularTreeview ) {
					
						//create tree object if not exists
						self.treeId = self.treeId || {};

						//if node head clicks,
						self.treeId.selectNodeHead = self.treeId.selectNodeHead || function( selectedNode ){
							//Collapse or Expand
							selectedNode.collapsed = !selectedNode.collapsed;
						};

						//if node label clicks,
						self.treeId.selectNodeLabel = self.treeId.selectNodeLabel || function( selectedNode ){

							//remove highlight from previous node
							if( self.treeId.currentNode && self.treeId.currentNode.selected ) {
								self.treeId.currentNode.selected = undefined;
							}

							//set highlight to selected node
							selectedNode.selected = 'selected';

							//set currentNode
							self.treeId.currentNode = selectedNode;
						};
					}


          //console.error($compile( template )( self ));

					//Rendering template.
					//element.html('').append( $compile( template )( self ) );
				}
  }
}

TreeViewController.$inject = ['$scope', '$element', '$attrs', '$compile'];

export default TreeViewController;
