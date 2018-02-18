
import template from './checkbox.list.html';
import CheckboxListController from './checkbox.list.controller';
import './checkbox.list.scss';

let CheckboxListComponent = {
  bindings: {
      selectableOptions : '<',
      selectedOtpions :"="
      
  },
  template,
  controller : CheckboxListController,
  controllerAs : 'chkListCtrl'
};

export default CheckboxListComponent;
