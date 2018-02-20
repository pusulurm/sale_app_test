import angular from 'angular';
import checkboxListModule from './check-box-list/checkbox.list.module';
import collapsePanelModule from './collapse-panel/collapse.panel.module';

let commonModule = angular.module('app.common', [
  checkboxListModule,
  collapsePanelModule
])
  
.name;

export default commonModule;
