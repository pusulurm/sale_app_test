import template from './side.bar.html';
import controller from './side.bar.controller';
import './side.bar.scss';

let sidebarComponent = {
  bindings: {
    selectedProductCategories : "=",
    selectedPriceRanges : "="
  },
  template,
  controller,
  controllerAs : 'sideBar'
};

export default sidebarComponent;
