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

    it('should have isCollapsed property', () => {
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
