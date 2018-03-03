class SidebarController {
  constructor(productsLookup) {
    this.productsLookup = productsLookup;
    let self = this;

    this.isRootElement = true;

    self.selectedTreeNode = null;
    this.onBreadcrumbSelectionChanged = function (node) {
      self.selectedTreeNode = node;
    }

    self.breadcrumbModel = null;
    this.treeSelectionChange = function (selectedNode) {
      self.breadcrumbModel = selectedNode;
    }

    this.onProductCategoryChange = this.onProductCategoryChange.bind(this);
    this.onPriceRangeChange = this.onPriceRangeChange.bind(this);
  }

  onPriceRangeChange(newPriceRange) {
    this.selectedPriceRanges = newPriceRange;
  }

  onProductCategoryChange(newCategory) {
    this.selectedProductCategories = newCategory;
  }

  $onInit() {
    this.productCategories = this.productsLookup.getProductCategories();
    this.priceRanges = this.productsLookup.getPriceRanges();
  }
}

SidebarController.$inject = ['products.lookup.service'];

export default SidebarController;
