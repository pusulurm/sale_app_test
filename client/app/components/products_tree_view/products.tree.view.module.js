import angular from 'angular';
import productsTreeViewComponent from './products.tree.view.component';

var productsTreeViewModuleName = 'sephora.test.products.tree';

angular.module(productsTreeViewModuleName, [])
.component('productsTreeView', productsTreeViewComponent);

export default productsTreeViewModuleName;
