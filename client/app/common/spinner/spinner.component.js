
import template from './spinner.html';
import controller from './spinner.controller';
import './spinner.scss';

let SpinnerComponent = {
  bindings: {    
    spinnerPromise : "<"
  },
  template,
  controller,
  replace: true,
  controllerAs : 'spinner'
};

export default SpinnerComponent;
