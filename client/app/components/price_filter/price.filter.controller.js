class PriceFilterController {
  constructor(priceFilterService) {
    this.priceFilterService = priceFilterService;
    this.onPriceRangeChanged = this.onPriceRangeChanged.bind(this);
    this.isFilterCollapsed = false;

  }

  onPriceRangeChanged(priceRanges) {
    if (this.onPriceRangeSelectionChange) {
      let formattedPriceRanges = this.priceFilterService.formatSelectedPriceRanges(priceRanges, this.priceRanges);
      this.onPriceRangeSelectionChange()(formattedPriceRanges);
    }
  }

  $onInit() {
    this.priceRangesArray = this.priceRanges ? this.priceRanges.map(a => a.label) : [];
  }
}
PriceFilterController.$inject = ['price.filter.service']
export default PriceFilterController;
