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

  // describe('View', () => {
  //   // view layer specs.
  //   let scope, template;

  //   beforeEach(() => {
  //     scope = $rootScope.$new();
  //     scope.refreshProductsBasedOnFilter = sinon.spy();
  //     scope.productsListService = {
  //       getProductDetails : sinon.spy()
  //     }
  //     template = $compile('<products-list></products-list>')(scope);
  //     scope.$apply();
  //   });

  //   it('has collapse-panel in template', () => {
  //     expect(template.find('collapse-panel')).to.not.null;
  //   });

  //   it('has checkbox-list in template', () => {
  //     expect(template.find('checkbox-list')).to.not.null;
  //   });
  // });
});
