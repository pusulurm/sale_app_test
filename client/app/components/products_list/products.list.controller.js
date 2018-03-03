class ProductsListController {
  constructor(productsListService, productsLookupService) {
    this.productsListService = productsListService;
    this.productsLookupService = productsLookupService;
    this.$onChanges = this.$onChanges.bind(this);
  }

  refreshProductsBasedOnFilter() {
    this.productsListService.getProductDetails(this.filters).then(products => {
      this.productsList = products;
    })
  }

  $onInit() {
    this.sortOptions = this.productsLookupService.getSortOptions();
    this.filters = this.productsLookupService.getDefaultFilters();
    this.refreshProductsBasedOnFilter();
  }

  $onChanges(changes) {
    if (!this.filters) return;

    this.filters.category = changes.categories ? changes.categories.currentValue : "";
    this.filters.priceRange = changes.priceRanges ? changes.priceRanges.currentValue : null;
    this.refreshProductsBasedOnFilter();
  }

  onFiltersChange() {
    this.refreshProductsBasedOnFilter();
  }
}

ProductsListController.$inject = ['products.list.service', 'products.lookup.service'];

export default ProductsListController;
