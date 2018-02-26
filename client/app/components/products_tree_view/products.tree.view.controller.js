class ProductsTreeViewController {
  constructor() {
    let self = this;
   
    this.nodesList = [
      {
        "value": "User", "roleId": "role1", "collapsed": true, "children": [
          { "value": "subUser1", "roleId": "role11", "collapsed": true, "children": [] },
          {
            "value": "subUser2", "roleId": "role12", "collapsed": true, "children": [
              {
                "value": "subUser2-1", "roleId": "role121", "collapsed": true, "children": [
                  { "value": "subUser2-1-1", "roleId": "role1211", "collapsed": true, "children": [] },
                  { "value": "subUser2-1-2", "roleId": "role1212", "collapsed": true, "children": [] }
                ]
              }
            ]
          }
        ]
      },

      {
        "value": "Admin", "roleId": "role2", "collapsed": true, "children": [
          { "value": "subAdmin1", "roleId": "role11", "collapsed": true, "children": [] },
          {
            "value": "subAdmin2", "roleId": "role12", "collapsed": true, "children": [
              {
                "value": "subAdmin2-1", "roleId": "role121", "collapsed": true, "children": [
                  { "value": "subAdmin2-1-1", "roleId": "role1211", "collapsed": true, "children": [] },
                  { "value": "subAdmin2-1-2", "roleId": "role1212", "collapsed": true, "children": [] }
                ]
              }
            ]
          }
        ]
      },

      {
        "value": "Guest", "roleId": "role3", "collapsed": true, "children": [
          { "value": "subGuest1", "roleId": "role11", "collapsed": true, "children": [] },
          {
            "value": "subGuest2", "roleId": "role12", "collapsed": true, "children": [
              {
                "value": "subGuest2-1", "roleId": "role121", "collapsed": true, "children": [
                  { "value": "subGuest2-1-1", "roleId": "role1211", "collapsed": true, "children": [] },
                  { "value": "subGuest2-1-2", "roleId": "role1212", "collapsed": true, "children": [] }
                ]
              }
            ]
          }
        ]
      }
    ];

    this.isRootElement = true;
    self.selectedTreeNode = null;
    this.onBreadcrumbSelectionChanged = function (node) {
      self.selectedTreeNode = node;
    }

    self.breadcrumbModel = null;
    this.treeSelectionChange = function (selectedNode) {
      self.breadcrumbModel = selectedNode;
    }
  }
}

export default ProductsTreeViewController;
