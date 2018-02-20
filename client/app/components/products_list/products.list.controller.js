class ProductsListController {
  constructor() {
    this.selectableOptions  = [
        "Under $25",
        "$25 - $50",
        "$50 - $100",
        "$100 - $150",
        "$150 - $300s",
        "Above $300"
    ];
    this.isFilterCollapsed = false;
  }
}

export default ProductsListController;
