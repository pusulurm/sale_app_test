
import template from './breadcrumb.html';
import BreadcrumbController from './breadcrumb.controller';
import './breadcrumb.scss';

let BreadcrumbComponent = {
  bindings: {    
    nodes: '<',
    onNodeClicked: '&'
  },
  template,
  controller : BreadcrumbController,
  controllerAs : 'brdCrmb'
};

export default BreadcrumbComponent;
