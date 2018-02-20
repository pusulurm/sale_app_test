import angular from 'angular';
import ProductsListMod from './products_list/products.list.module';

let componentModule = angular.module('app.components', [
  ProductsListMod
])

.name;

export default componentModule;
