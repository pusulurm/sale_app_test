import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import ProductsListMod from './products_list/products_list_module';

let componentModule = angular.module('app.components', [
  ProductsListMod
])

.name;

export default componentModule;
