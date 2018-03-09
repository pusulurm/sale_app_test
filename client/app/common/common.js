import angular from 'angular';
import checkboxListModule from './check-box-list/checkbox.list.module';
import collapsePanelModule from './collapse-panel/collapse.panel.module';
import treeViewModule from './tree-view/tree.view.module';
import ratingModule from './star-rating/star.rating.module';
import breadcrumbModule from './breadcrumb/breadcrumb.module';
import paginationModule from './pagination/pagination.module';
import SpinnerModule from './spinner/spinner.module';

let commonModule = angular.module('app.common', [
  checkboxListModule,
  collapsePanelModule,
  treeViewModule,
  ratingModule,
  breadcrumbModule,
  paginationModule,
  SpinnerModule
])
  
.name;

export default commonModule;
