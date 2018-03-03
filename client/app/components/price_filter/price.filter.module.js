import angular from 'angular';
import PriceFilter from './price.filter.service';
import priceFilterComponent from './price.filter.component';

var priceFilterModuleName = 'sephora.test.price.filter';


angular.module(priceFilterModuleName, [])
.service('price.filter.service', PriceFilter)
.component('priceFilter', priceFilterComponent);

export default priceFilterModuleName;
