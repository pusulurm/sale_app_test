import ProductsListController from '../products.list.controller';
var sinon = require('sinon');

describe('ProductsListController', () => {
    let mockPromise = {then : sinon.spy()},
        getProductDetailsStub = sinon.stub();

        getProductDetailsStub.withArgs().returns(mockPromise);


    let productsLisCtrlObj,    
        productsListServiceMockObj = {
            getProductDetails: getProductDetailsStub
        }, productsLookupServiceMockObj = {
            getSortOptions: sinon.spy(),
            getDefaultFilters: sinon.spy()
        };
    beforeEach(() => {
        productsLisCtrlObj = new ProductsListController(productsListServiceMockObj, productsLookupServiceMockObj);
    });
    describe('$onInit method', () => {
        it('should call methods "getSortOptions" and "getDefaultFilters"', () => {
            productsLisCtrlObj.refreshProductsBasedOnFilter = sinon.spy();
            productsLisCtrlObj.$onInit();
            sinon.assert.calledOnce(productsLookupServiceMockObj.getSortOptions);
            sinon.assert.calledOnce(productsLookupServiceMockObj.getDefaultFilters);
        });
    })

    describe('$onChanges method', () => {
        it('should call method "refreshProductsBasedOnFilter"', () => {
            productsLisCtrlObj.filters = { category: "Something" };
            productsLisCtrlObj.refreshProductsBasedOnFilter = sinon.spy();
            productsLisCtrlObj.$onChanges({});
            sinon.assert.calledOnce(productsLisCtrlObj.refreshProductsBasedOnFilter);
        });
    })

    describe('onFiltersChange method', () => {
        it('should call method "refreshProductsBasedOnFilter"', () => {
            productsLisCtrlObj.refreshProductsBasedOnFilter = sinon.spy();
            productsLisCtrlObj.onFiltersChange();
            sinon.assert.calledOnce(productsLisCtrlObj.refreshProductsBasedOnFilter);
        });
    })

    describe('refreshProductsBasedOnFilter method', () => {
        it('should call method "getProductDetails" of products.list.service', () => {
            productsLisCtrlObj.refreshProductsBasedOnFilter();
            sinon.assert.calledOnce(productsListServiceMockObj.getProductDetails);
        });
    })
});