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

        if (selectedFilters.pageNumber) {
            queryString += productConfig.queryStringOptions.pageNumber + selectedFilters.pageNumber;
        }

        return productConfig.productsBaseUrl + queryString;
    }

    addMockedRatings(productData){
        //As API is not returning rating info, mocking with a random rating

        if(!productData || productData.length === 0){
            return;
        }
        productData.forEach(product => {
            product.attributes.rating = Math.floor(Math.random() * 5) + 1 ;
        });
        
    }

    prepareResponse(response, doNotRefreshPagination){
        if(!response || !response.data){
            return [];
        }
        let queryStringValues = [];

        this.addMockedRatings (response.data.data);

        if(!doNotRefreshPagination && response.data.links && response.data.links.last){
            queryStringValues = decodeURI(response.data.links.last).split("&")
            let pageNumberIndex = queryStringValues.findIndex(params => params.indexOf(productConfig.pageNumberQueryString) > -1);
            let pageNumber = queryStringValues[pageNumberIndex].split("=")[1];
            return {pageNumber : parseInt(pageNumber), data : response.data.data};
        }
        return { data : response.data.data};

    }

    getProductDetails(selectedFilters, doNotRefreshPagination) {
        let self = this, deferred = this.$q.defer();

        this.$http({
            method: 'GET',
            url: this.prepareUrl(selectedFilters)
        }).then(response => {
            deferred.resolve(self.prepareResponse(response, doNotRefreshPagination));
        }, err => {
            //Log this error to server.
            deferred.resolve([]);
        });

        return deferred.promise;
    }
}

ProductsList.$inject = ['$http', '$q'];

export default ProductsList;