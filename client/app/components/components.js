import angular from 'angular';
import ProductsListMod from './products_list/products.list.module';
import SidebarMod from './side_bar/side.bar.module';
import productsTreeViewMod from './products_tree_view/products.tree.view.module';

let componentModule = angular.module('app.components', [
  ProductsListMod,
  SidebarMod,
  productsTreeViewMod
])

.name;

export default componentModule;
