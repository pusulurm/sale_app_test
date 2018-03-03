import * as productConfig from './config';

class ProductsLookup{
    constructor(){

    }

    getSortOptions() {
        return productConfig.sortOptions;
    }

    getDefaultFilters() {
        return Object.assign({}, productConfig.defaultFilters);
    }

    getProductCategories(){
        return Object.assign([], productConfig.productCategories);
    }

    getPriceRanges(){
        return Object.assign([], productConfig.priceRanges);
    }
}

ProductsLookup.$inject= [];

export default ProductsLookup;