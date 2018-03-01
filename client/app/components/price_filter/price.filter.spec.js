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

    it('has a selectableOptions property', () => { // erase if removing this.name from the controller
      expect(controller).to.have.property('selectableOptions');
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
