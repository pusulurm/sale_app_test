class PriceFilter {
    constructor() { }
    formatSelectedPriceRanges(selectedPriceRanges, allPrices) {
        if (!selectedPriceRanges || selectedPriceRanges.length === 0 || selectedPriceRanges.length === allPrices.length) {
            return null;
        }
        else if (selectedPriceRanges.length === 1) {
            return allPrices.filter(price => price.label === selectedPriceRanges[0])[0].value;
        }
        else {
            let minIndex = selectedPriceRanges.length-1, maxIndex = 0;

            selectedPriceRanges.forEach(range =>{
                let currentIndex = allPrices.findIndex(price => price.label === range);
                
                minIndex = minIndex < currentIndex ? minIndex : currentIndex;
                maxIndex = maxIndex > currentIndex ? maxIndex : currentIndex;
            });
            let formattedFilterRange = {lt : allPrices[maxIndex].value.lt, gt : allPrices[minIndex].value.gt};

            if(!formattedFilterRange.lt){
                delete formattedFilterRange.lt;
            }

            if(!formattedFilterRange.gt){
                delete formattedFilterRange.gt;
            }

            return formattedFilterRange;
        }
    }
}
PriceFilter.$inject = [];
export default PriceFilter;