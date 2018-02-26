import angular from 'angular';
import BreadcrumbComponent from './breadcrumb.component';
import './breadcrumb.scss';
let breadcrumbModule = 'common.breadcrumb.module';

angular
.module(breadcrumbModule, [])
.component('breadcrumb', BreadcrumbComponent);

export default breadcrumbModule;
