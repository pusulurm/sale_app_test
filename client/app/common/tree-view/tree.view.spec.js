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
    let controller;
    beforeEach(() => {
      controller = $componentController('treeView', {
        $scope: $rootScope.$new()
      });
    });

    describe('$onInit method', () => {
      it('should call method setParentOfChildNodes for each node', () => {
        controller.setParentOfChildNodes = sinon.spy();
        controller.nodeList = sampleNodes;
        controller.$onInit();
        sinon.assert.calledTwice(controller.setParentOfChildNodes);
      })
    });

    describe('onNodeSelected method', () => {

      beforeEach(() => {
        controller.unselectAllNodes = sinon.spy();
        controller.onSelectionChange = sinon.spy();
      });

      it('should collapse node when it is expanded', () => {
        let currentNode = {};
        controller.onNodeSelected(currentNode);
        expect(currentNode.collapsed).to.eq(true);
      });

      it('should expand node when it is collapsed', () => {
        let currentNode = { collapsed: true };
        controller.onNodeSelected(currentNode);
        expect(currentNode.collapsed).to.eq(false);
      });

      it('should call method unselectAllNodes once', () => {
        let currentNode = { collapsed: true };
        controller.onNodeSelected(currentNode);
        sinon.assert.calledOnce(controller.unselectAllNodes);
      });

      it('should call method onSelectionChange once', () => {
        let currentNode = { collapsed: true };
        controller.onNodeSelected(currentNode);
        sinon.assert.calledOnce(controller.onSelectionChange);
      });

      it('should set selected flag to true', () => {
        let currentNode = { collapsed: true };
        controller.onNodeSelected(currentNode);
        expect(currentNode.selected).to.eq(true);
      });

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
