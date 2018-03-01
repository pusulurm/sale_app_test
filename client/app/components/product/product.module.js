import angular from 'angular';
import ProductComponent from './product.component';

var productModuleName = 'sephora.test.product';


angular.module(productModuleName, [])
.component('product', ProductComponent);

export default productModuleName;
