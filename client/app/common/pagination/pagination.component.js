
import template from './pagination.html';
import PaginationController from './pagination.controller';
import './pagination.scss';

let PaginationComponent = {
  bindings: {
         
  },
  template,
  controller : PaginationController,
  controllerAs : 'paginate'
};

export default PaginationComponent;
