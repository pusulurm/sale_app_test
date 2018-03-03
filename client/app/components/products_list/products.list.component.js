import template from './products.list.html';
import controller from './products.list.controller';
import './products.list.scss';

let productsListComponent = {
  bindings: {
    priceRanges : "<",
    categories : "<"
  },
  template,
  controller,
  controllerAs: 'prodList'
};

export default productsListComponent;
