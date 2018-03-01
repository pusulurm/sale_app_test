import angular from 'angular';
import SidebarMod from './side_bar/side.bar.module';
import productsTreeViewMod from './products_tree_view/products.tree.view.module';
import priceFilterMod from './price_filter/price.filter.module';
import productSummaryMod from './product_summary/product.summary.module';
import productMod from './product/product.module';
import ProductsListMod from './products_list/products.list.module';


let componentModule = angular.module('app.components', [
  SidebarMod,
  productsTreeViewMod,
  priceFilterMod,
  productSummaryMod,
  productMod,
  ProductsListMod
])

.name;

export default componentModule;
