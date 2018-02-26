var sinon = require('sinon')

import BreadcrumbModule from './breadcrumb.module'

describe('Breadcrumb', () => {
  let $rootScope, $componentController, $compile;

  beforeEach(window.module(BreadcrumbModule));

  beforeEach(inject(($injector) => {
    $rootScope = $injector.get('$rootScope');
    $componentController = $injector.get('$componentController');
    $compile = $injector.get('$compile');
  }));

  describe('Controller', () => {
    // controller specs
    let controller;
    beforeEach(() => {
      controller = $componentController('breadcrumb', {
        $scope: $rootScope.$new()
      });
      controller.breadcrumbValues = [];
    });

    describe('$onChanges method', () => {
      it('should call method buildBreadcrumbValues', () => {
        controller.buildBreadcrumbValues = sinon.spy();
        controller.$onChanges({ nodes: { currentValue: {} } });
        sinon.assert.calledOnce(controller.buildBreadcrumbValues);
      })
    });

    describe('onClicked method', () => {
      it('should call method getSelectedBreadcrumbNode', () => {
        controller.getSelectedBreadcrumbNode = sinon.spy();
        controller.onClicked();
        sinon.assert.calledOnce(controller.getSelectedBreadcrumbNode);
      })

      it('should not call method getSelectedBreadcrumbNode when active node is clicked', () => {
        controller.getSelectedBreadcrumbNode = sinon.spy();
        controller.onClicked(-1);
        sinon.assert.notCalled(controller.getSelectedBreadcrumbNode);
      })
    });

    describe('buildBreadcrumbValues method', () => {
      it('should derive empty breadcrumbValues when nodeList is empty', () => {
        controller.buildBreadcrumbValues();
        expect(controller.breadcrumbValues.length).to.equal(0);
      })

      it('should derive breadcrumbValues as per selected node structure', () => {

        let expectedBreadcrumbValues = ['Level 3', 'Level 2', 'Level 1'],
          selectedNode = {
            value: 'Level 1',
            parent: {
              value: "Level 2",
              parent: {
                value: "Level 3"
              }
            }
          }
        controller.buildBreadcrumbValues(selectedNode);
        expect(controller.breadcrumbValues.length).to.equal(3);
        expect(controller.breadcrumbValues).to.deep.equal(expectedBreadcrumbValues);
      })
    });

  });

  describe('View', () => {
    // view layer specs.
    let scope, template;
  });
});
