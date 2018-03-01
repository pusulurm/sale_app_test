import angular from 'angular';
import ProductSummaryComponent from './product.summary.component';

var productSummaryModuleName = 'sephora.test.product.summary';


angular.module(productSummaryModuleName, [])
.component('productSummary', ProductSummaryComponent);

export default productSummaryModuleName;
