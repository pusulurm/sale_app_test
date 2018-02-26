var sinon = require('sinon')

import treeViewModule from './tree.view.module'

describe('Tree View', () => {
  let $rootScope, $componentController, $compile,
    sampleNodes = [
      {
        "value": "User", "roleId": "role1", "collapsed": true, "children": [
          { "value": "subUser1", "roleId": "role11", "collapsed": true, "children": [] }]
      },
      {
        "value": "Admin", "roleId": "role2", "collapsed": false, "children": [
          { "value": "subAdmin1", "roleId": "role11", "collapsed": true, "children": [] }]
      }
    ];

  beforeEach(window.module(treeViewModule));

  beforeEach(inject(($injector) => {
    $rootScope = $injector.get('$rootScope');
    $componentController = $injector.get('$componentController');
    $compile = $injector.get('$compile');
  }));

  describe('Controller', () => {
    // controller specs
    let controller, scope = null;
    beforeEach(() => {
      scope = $rootScope.$new();
      controller = $componentController('treeView', {
        $scope: scope
      });

      sinon.spy(scope, '$emit');
      sinon.spy(scope, '$on');
    });

    describe('$onInit method', () => {
      it('should call method setParentOfChildNodes for each node', () => {
        controller.setParentOfChildNodes = sinon.spy();
        controller.nodeList = sampleNodes;
        controller.$onInit();
        sinon.assert.calledTwice(controller.setParentOfChildNodes);
      })

      it('should subscribe to treeSelectionChanged event', () => {
        controller.setParentOfChildNodes = sinon.spy();
        controller.nodeList = sampleNodes;
        controller.$onInit();
        sinon.assert.calledOnce(scope.$on);
        sinon.assert.calledWith(scope.$on, 'treeSelectionChanged');
      });

    });

    describe('onNodeSelected method', () => {

      beforeEach(() => {
        controller.unselectAllNodes = sinon.spy();
        controller.onSelectionChange = sinon.spy();
      });

      it('should collapse a node when it is expanded and selected', () => {
        let currentNode = { selected: true };
        controller.onNodeSelected(currentNode);
        expect(currentNode.collapsed).to.eq(true);
      });

      it('should expand node when it is collapsed and selected', () => {
        let currentNode = { selected: true, collapsed: true };
        controller.onNodeSelected(currentNode);
        expect(currentNode.collapsed).to.eq(false);
      });

      it('should emit treeSelectionChanged event with currentNode', () => {
        let currentNode = { collapsed: true };

        controller.onNodeSelected(currentNode);
        sinon.assert.calledOnce(scope.$emit);
        sinon.assert.calledWith(scope.$emit, 'treeSelectionChanged', currentNode);

      });
    });

    describe('$onChanges method', () => {
      it('should emit treeSelectionChanged event with selectedNode.currentValue', () => {
        let changesObj = { selectedNode: { currentValue: {}, isFirstChange: () => { return false } } };
        controller.$onChanges(changesObj);
        sinon.assert.calledOnce(scope.$emit);
        sinon.assert.calledWith(scope.$emit, 'treeSelectionChanged', changesObj.selectedNode.currentValue);
      })

      it('should not emit treeSelectionChanged event', () => {
        let changesObj = { selectedNode: { currentValue: {}, isFirstChange: () => { return true } } };
        controller.$onChanges(changesObj);
        sinon.assert.notCalled(scope.$emit);
      })
    });

    describe('findANodeByValue method', () => {
      it('should return empty when empty nodeList is provided', () => {
        let nodeArray = [];
        expect(controller.findANodeByValue(nodeArray, '')).to.eq(null);
      })

      it('should find and return valid node from nodeArray', () => {

        let valueToBeFound = 'Italy',  nodeArray = [
          {
            value: 'Europe', children: [{ value: 'Italy', children: [{ value: 'Rome' }, { value: 'Milan' }] }]
          },
          {
            value: 'South America'
          }
        ];
        expect(controller.findANodeByValue(nodeArray, valueToBeFound)).to.eq(nodeArray[0].children[0]);
      })
    });

  });

  describe('View', () => {
    // view layer specs.
    let scope, template;

    beforeEach(() => {
      scope = $rootScope.$new();
      scope.nodes = sampleNodes;
      scope.onNodeChange = sinon.spy();
      template = $compile('<tree-view on-selection-change = "onNodeChange" node-list = "nodes"></tree-view>')(scope);
      scope.$apply();
    });

    it('should have 2 chile trees as 2 nodes with childs provided', () => {
      expect(template.find('tree-view').length).to.equal(2);
    });
  });
});
