var sinon = require('sinon');
import PriceFilterModule from './price.filter.module'

describe('Price Filter', () => {
  let $rootScope, $componentController, $compile;

  beforeEach(window.module(PriceFilterModule));

  beforeEach(inject(($injector) => {
    $rootScope = $injector.get('$rootScope');
    $componentController = $injector.get('$componentController');
    $compile = $injector.get('$compile');
  }));

  describe('Controller', () => {
    // controller specs
    let controller;
    beforeEach(() => {
      controller = $componentController('priceFilter', {
        $scope: $rootScope.$new()
      });
    });

    describe('$onInit method', () => {
      it('should derive array of priceRanges based on ranges provided', () => {
        controller.priceRanges = [{ label: "1" }, { label: "2" }];
        controller.$onInit();
        expect(controller.priceRangesArray).to.deep.eq(["1", "2"]);
      })
    });

  });

  describe('View', () => {
    // view layer specs.
    let scope, template;

    beforeEach(() => {
      scope = $rootScope.$new();
      template = $compile('<price-filter></price-filter>')(scope);
      scope.$apply();
    });

    it('has collapse-panel in template', () => {
      expect(template.find('collapse-panel')).to.not.null;
    });

    it('has checkbox-list in template', () => {
      expect(template.find('checkbox-list')).to.not.null;
    });
  });
});
