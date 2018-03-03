import template from './products.tree.view.html';
import controller from './products.tree.view.controller';
import './products.tree.view.scss';

let productsTreeViewComponent = {
  bindings: {
    productCategories : "<",
    onProductCategorySelectionChange : "&"
  },
  template,
  controller,
  controllerAs : 'prodCat'
};

export default productsTreeViewComponent;
