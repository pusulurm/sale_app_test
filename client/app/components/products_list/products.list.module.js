import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ProductsListComponent from './products.list.component';

var productsListModuleName = 'sephora.test.products.list';


angular.module(productsListModuleName, [])
.component('productsList', ProductsListComponent);

export default productsListModuleName;
