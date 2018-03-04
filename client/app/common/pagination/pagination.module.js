import angular from 'angular';
import PaginationComponent from './pagination.component';
import './pagination.scss';
let paginationModule = 'common.pagination.module';

angular
.module(paginationModule, [])
.component('pagination', PaginationComponent);

export default paginationModule;
