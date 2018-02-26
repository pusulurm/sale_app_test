
import template from './tree.view.html';
import TreeViewController from './tree.view.controller';
import './tree.view.scss';

let TreeViewComponent = {
  bindings: {
      isRootElement : '<',
      nodeList : '<',
      selectedNode : '<',
      onSelectionChange : '<'      
  },
  template,
  controller : TreeViewController,
  controllerAs : 'treeView'
};

export default TreeViewComponent;
