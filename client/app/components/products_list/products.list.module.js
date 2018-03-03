import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ProductsList from './products.list.service';
import ProductsListComponent from './products.list.component';
import ProductsLookup from './products.lookup.service';
var productsListModuleName = 'sephora.test.products.list';


angular.module(productsListModuleName, [])
.service('products.lookup.service', ProductsLookup)
.service('products.list.service', ProductsList)
.component('productsList', ProductsListComponent);

export default productsListModuleName;
