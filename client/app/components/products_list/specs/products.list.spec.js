import ProductsListModule from '../products.list.module'
var sinon = require('sinon');

describe('Products List', () => {
  let $rootScope, $componentController, $compile;

  beforeEach(window.module(ProductsListModule));

  beforeEach(inject(($injector) => {
    $rootScope = $injector.get('$rootScope');
    $componentController = $injector.get('$componentController');
    $compile = $injector.get('$compile');
  }));

  describe('Controller', () => {
    // controller specs
    let controller;
    beforeEach(() => {
      controller = $componentController('productsList', {
        $scope: $rootScope.$new()
      });
    });
  });
});
