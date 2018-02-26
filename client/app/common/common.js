import angular from 'angular';
import checkboxListModule from './check-box-list/checkbox.list.module';
import collapsePanelModule from './collapse-panel/collapse.panel.module';
import treeViewModule from './tree-view/tree.view.module';
import ratingModule from './star-rating/star.rating.module';
import breadcrumbModule from './breadcrumb/breadcrumb.module';

let commonModule = angular.module('app.common', [
  checkboxListModule,
  collapsePanelModule,
  treeViewModule,
  ratingModule,
  breadcrumbModule
])
  
.name;

export default commonModule;
