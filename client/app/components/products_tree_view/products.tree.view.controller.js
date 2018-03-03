class ProductsTreeViewController {
  constructor() {
    let self = this;

    this.isRootElement = true;
    self.selectedTreeNode = null;
    self.breadcrumbModel = null;

    this.onBreadcrumbSelectionChanged = function (node) {
      self.selectedTreeNode = node;
    }

    this.treeSelectionChange = function (selectedNode) {
      self.breadcrumbModel = selectedNode;

      if(self.onProductCategorySelectionChange){
        self.onProductCategorySelectionChange()(selectedNode.value1)
      }
    }
  }
  
}

export default ProductsTreeViewController;
