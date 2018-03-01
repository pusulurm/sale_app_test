import template from './product.summary.html';
import controller from './product.summary.controller';
import './product.summary.scss';

let ProductSummaryComponent = {
  bindings: {
    productDetails : "<"
  },
  template,
  controller,
  controllerAs: 'prodSummary'
};

export default ProductSummaryComponent;
