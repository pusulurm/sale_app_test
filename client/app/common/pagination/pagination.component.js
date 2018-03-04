
import template from './pagination.html';
import PaginationController from './pagination.controller';
import './pagination.scss';

let PaginationComponent = {
  bindings: {
      totalPages : "<",
      onPaginationChange : "&"
  },
  template,
  controller : PaginationController,
  controllerAs : 'paginate'
};

export default PaginationComponent;
