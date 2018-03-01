import angular from 'angular';
import priceFilterComponent from './price.filter.component';

var priceFilterModuleName = 'sephora.test.price.filter';


angular.module(priceFilterModuleName, [])
.component('priceFilter', priceFilterComponent);

export default priceFilterModuleName;
