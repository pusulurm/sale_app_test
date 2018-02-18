import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ProductsListComponent from './products.list.component';
import checkboxListModule from '../../common/check-box-list/checkbox.list.module';
import collapsePanelModule from '../../common/collapse-panel/collapse.panel.module'
let productsListModule = angular.module('productsListMod', [
  uiRouter,
  checkboxListModule,
  collapsePanelModule
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('productsList', {
      url: '/',
      component: 'productsList'
    });
})

.component('productsList', ProductsListComponent)
  
.name;

export default productsListModule;
