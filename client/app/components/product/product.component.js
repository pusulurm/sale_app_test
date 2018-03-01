import template from './product.html';
import controller from './product.controller';
import './product.scss';

let ProductComponent = {
  bindings: {
    details : "<"
  },
  template,
  controller,
  controllerAs: 'prod'
};

export default ProductComponent;
