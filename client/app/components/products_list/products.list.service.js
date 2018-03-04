import * as productConfig from './config';

class ProductsList {
    constructor($http, $q) {
        this.$http = $http;
        this.$q = $q;
    }

    prepareUrl(selectedFilters) {

        if(!selectedFilters){
            return productConfig.productsBaseUrl;
        }

        let queryString = "?";

        if (selectedFilters.category) {
            let filterComparision = selectedFilters.category.indexOf(",") > -1 ? productConfig.queryStringOptions.filter.inCategories : productConfig.queryStringOptions.filter.equlCategory;
            queryString += filterComparision + selectedFilters.category;
        }

        if (selectedFilters.priceRange) {
            if (selectedFilters.priceRange.lt) {
                queryString += productConfig.queryStringOptions.filter.priceLessThan + selectedFilters.priceRange.lt;
            }
            if (selectedFilters.priceRange.gt) {
                queryString += productConfig.queryStringOptions.filter.priceGreaterThan + selectedFilters.priceRange.gt;
            }
        }

        if (selectedFilters.sortBy) {
            queryString += productConfig.queryStringOptions.sort + selectedFilters.sortBy.value;
        }
        if (selectedFilters.pageSize) {
            queryString += productConfig.queryStringOptions.pageSize + selectedFilters.pageSize;
        }

        return productConfig.productsBaseUrl + queryString;
    }

    getProductDetails(selectedFilters) {
        let deferred = this.$q.defer();

        this.$http({
            method: 'GET',
            url: this.prepareUrl(selectedFilters)
        }).then(response => {
            deferred.resolve((response && response.data) ? response.data.data : []);
        }, err => {
            //Log this error to server.
            deferred.resolve([]);
        });

        return deferred.promise;
    }
}

ProductsList.$inject = ['$http', '$q'];

export default ProductsList;