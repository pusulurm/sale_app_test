class SidebarController {
  constructor() {
    let self = this;
    this.tasks = [
      {
        name: 'Europe',
        children: [
          {
            name: 'Italy',
            children: [
              {
                name: 'Rome'
              },
              {
                name: 'Milan'
              }
            ]
          },
          {
            name: 'Spain'
          }
        ]
      },
      {
        name: 'South America',
        children: [
          {
            name: 'Brasil'
          },
          {
            name: 'Peru'
          }
        ]
      }
    ];
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

    self.selectedTreeNode = null;
    this.onBreadcrumbSelectionChanged = function (node) {
      console.error('Selected node from Breadcrumb');
      console.error(node);
      self.selectedTreeNode = node;
    }

    self.breadcrumbModel = null;
    this.treeSelectionChange = function (selectedNode) {
      //console.error("Node Selected");
      //console.error(selectedNode);
      self.breadcrumbModel = selectedNode;
    }

    this.rating = {
      current: 4,
      max: 5,
      getSelectedRating: (newRating) => {
        console.error('New Rating :: ' + newRating);
      }
    }


  }
}

export default SidebarController;
