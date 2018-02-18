import CollapsePanelModule from './collapse.panel.module'

describe('Collapse Panel', () => {
  let $rootScope, $state, $location, $componentController, $compile;

  beforeEach(window.module(CollapsePanelModule));

  beforeEach(inject(($injector) => {
    $rootScope = $injector.get('$rootScope');
    $componentController = $injector.get('$componentController');
    $state = $injector.get('$state');
    $location = $injector.get('$location');
    $compile = $injector.get('$compile');
  }));

  describe('Controller', () => {
    // controller specs
    let controller;
    beforeEach(() => {
      controller = $componentController(CollapsePanelModule, {
        $scope: $rootScope.$new()
      });
    });

    it('has isCollapsed property', () => { 
      console.log(controller);
      expect(controller).to.have.property('isCollapsed');
    });
  });

  describe('View', () => {
    // view layer specs.
    let scope, template;

    beforeEach(() => {
      scope = $rootScope.$new();
      template = $compile('<collapse-panel panel-title="PRICE"></collapse-panel>')(scope);
      scope.$apply();
    });

    it('has heading in template', () => {
      expect(template.find('h3').html()).to.eq('PRICE');
    });

  });
});
