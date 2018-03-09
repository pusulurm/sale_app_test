class ProductsListController {
  constructor(productsListService, productsLookupService) {
    this.productsListService = productsListService;
    this.productsLookupService = productsLookupService;
    this.$onChanges = this.$onChanges.bind(this);
    this.onPaginationChanged = this.onPaginationChanged.bind(this);
    this.productsListPromise = null;
  }

  refreshProductsBasedOnFilter(doNotRefreshPagination) {
    this.productsListPromise  = this.productsListService.getProductDetails(this.filters, doNotRefreshPagination);
    this.productsListPromise.then(productsResponse => {
      this.productsList = productsResponse.data;
      if (!doNotRefreshPagination) {
        this.totalPagesAvailable = productsResponse.pageNumber;
      }
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
    if (changes.priceRanges) {
      this.filters.priceRange = changes.priceRanges ? changes.priceRanges.currentValue : null;
    } 
    this.filters.pageNumber = 1;
    this.refreshProductsBasedOnFilter();
  }

  onFiltersChange() {
    this.refreshProductsBasedOnFilter();
  }

  onPaginationChanged(newPagination) {
    let doNotRefreshPagination = newPagination.pageSize === this.filters.pageSize;
    this.filters.pageNumber = newPagination.currentPage;
    this.filters.pageSize = newPagination.pageSize;
    this.refreshProductsBasedOnFilter(doNotRefreshPagination);
  }
}

ProductsListController.$inject = ['products.list.service', 'products.lookup.service'];

export default ProductsListController;
