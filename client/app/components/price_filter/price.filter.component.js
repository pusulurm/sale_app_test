import template from './price.filter.html';
import controller from './price.filter.controller';
import './price.filter.scss';

let priceFilterComponent = {
  bindings: {
    priceRanges : "<",
    onPriceRangeSelectionChange : "&"
  },
  template,
  controller,
  controllerAs : "priceFilter"
};

export default priceFilterComponent;
