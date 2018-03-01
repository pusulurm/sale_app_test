import CollapsePanelModule from './collapse.panel.module'

describe('Collapse Panel', () => {
  let $rootScope, $componentController, $compile;

  beforeEach(window.module(CollapsePanelModule));

  beforeEach(inject(($injector) => {
    $rootScope = $injector.get('$rootScope');
    $componentController = $injector.get('$componentController');
    $compile = $injector.get('$compile');
  }));

  describe('Controller', () => {
    // controller specs
    let controller;
    beforeEach(() => {
      controller = $componentController('collapsePanel', {
        $scope: $rootScope.$new()
      });
    });

    describe('$onInit method', () => {
      it('should set isCollapsed property to false if undefined', () => {
        controller.$onInit(); 
        expect(controller.isCollapsed).to.be.false;
      });

      it('should not set isCollapsed property to false if provides as true', () => {
        controller.isCollapsed = true;
        controller.$onInit(); 
        expect(controller.isCollapsed).to.be.true;
      });

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

    it('should have heading in template', () => {
      expect(template.find('h3').html()).to.eq('PRICE');
    });

    it('should not show panel content when collapsed', () => {
      scope.isCollapsed = false;
      template = $compile('<collapse-panel is-collapsed="isCollapsed" panel-title="PRICE"><div>Test Content {{isCollapsed}}</div></collapse-panel>')(scope);
      scope.$apply();
      expect(template.find('ng-transclude').parent().hasClass('ng-hide')).to.be.false;
    });

    it('should not show panel content when collapsed', () => {
      scope.isCollapsed = true;
      template = $compile('<collapse-panel is-collapsed="isCollapsed" panel-title="PRICE"><div>Test Content {{isCollapsed}}</div></collapse-panel>')(scope);
      scope.$apply();
      expect(template.find('ng-transclude').parent().hasClass('ng-hide')).to.be.true;
    });
  });
});
