
import template from './collapse.panel.html';
import CollapsePanelController from './collapse.panel.controller';
import './collapse.panel.scss';

let CollapsePanelComponent = {
  bindings: {
      isCollapsed : '<',
      panelTitle : "@",
      onCollapseChange : "&"      
  },
  transclude: true,
  template,
  controller : CollapsePanelController,
  controllerAs : 'colpsPan'
};

export default CollapsePanelComponent;
