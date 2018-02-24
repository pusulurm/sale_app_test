import angular from 'angular';
import ProductsListMod from './products_list/products.list.module';
import SidebarMod from './side_bar/side.bar.module';

let componentModule = angular.module('app.components', [
  ProductsListMod,
  SidebarMod
])

.name;

export default componentModule;
