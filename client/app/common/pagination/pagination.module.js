import angular from 'angular';
import PaginationComponent from './pagination.component';
import PaginationService from './pagination.service';
import './pagination.scss';
let paginationModule = 'common.pagination.module';

angular
.module(paginationModule, [])
.service('pagination.service', PaginationService)
.component('pagination', PaginationComponent);

export default paginationModule;
