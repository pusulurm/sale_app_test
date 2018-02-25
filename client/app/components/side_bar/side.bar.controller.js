class SidebarController {
  constructor() {
    this.treeOptions = {
      nodeChildren: "children",
      dirSelectable: true,
      injectClasses: {
        ul: "a1",
        li: "a2",
        liSelected: "a7",
        iExpanded: "a3",
        iCollapsed: "a4",
        iLeaf: "a5",
        label: "a6",
        labelSelected: "a8"
      }
    }
    this.dataForTheTree =    
      [
        {
          "name": "Joe", "age": "21", "children": [
            { "name": "Smith", "age": "42", "children": [] },
            {
              "name": "Gary", "age": "21", "children": [
                {
                  "name": "Jenifer", "age": "23", "children": [
                    { "name": "Dani", "age": "32", "children": [] },
                    { "name": "Max", "age": "34", "children": [] }
                  ]
                }
              ]
            }
          ]
        },
        { "name": "Albert", "age": "33", "children": [] },
        { "name": "Ron", "age": "29", "children": [] }
      ];

      this.roleList = [
        { "value" : "User", "roleId" : "role1", "collapsed" : true,"children" : [
          { "value" : "subUser1", "roleId" : "role11", "collapsed" : true, "children" : [] },
          { "value" : "subUser2", "roleId" : "role12", "collapsed" : true, "children" : [
            { "value" : "subUser2-1", "roleId" : "role121","collapsed" : true, "children" : [
              { "value" : "subUser2-1-1", "roleId" : "role1211","collapsed" : true, "children" : [] },
              { "value" : "subUser2-1-2", "roleId" : "role1212","collapsed" : true, "children" : [] }
            ]}
          ]}
        ]},

        { "value" : "Admin", "roleId" : "role2","collapsed" : true, "children" : [
          { "value" : "subAdmin1", "roleId" : "role11", "collapsed" : true, "children" : [] },
          { "value" : "subAdmin2", "roleId" : "role12", "collapsed" : true,"children" : [
            { "value" : "subAdmin2-1", "roleId" : "role121", "collapsed" : true,"children" : [
              { "value" : "subAdmin2-1-1", "roleId" : "role1211", "collapsed" : true,"children" : [] },
              { "value" : "subAdmin2-1-2", "roleId" : "role1212", "collapsed" : true,"children" : [] }
            ]}
          ]}
        ]},

        { "value" : "Guest", "roleId" : "role3", "collapsed" : true,"children" : [
          { "value" : "subGuest1", "roleId" : "role11","collapsed" : true, "children" : [] },
          { "value" : "subGuest2", "roleId" : "role12", "collapsed" : true, "children" : [
            { "value" : "subGuest2-1", "roleId" : "role121", "collapsed" : true,"children" : [
              { "value" : "subGuest2-1-1", "roleId" : "role1211", "collapsed" : true,"children" : [] },
              { "value" : "subGuest2-1-2", "roleId" : "role1212", "collapsed" : true, "children" : [] }
            ]}
          ]}
        ]}
      ];

      this.treeSelectionChange = function(selectedNode){
        console.error("Node Selected");
        console.error(selectedNode);
      }

  this.rating = {
    current : 4,
    max : 5,
    getSelectedRating: (newRating) => {
      console.error('New Rating :: ' + newRating);
    }
  }


}
}

export default SidebarController;
