import ProductsLookUpService from '../products.lookup.service';
import * as config from '../config';

describe('products.lookup.service', () => {
    let productsLookupServiceObj = null;

    beforeEach(() => {
      productsLookupServiceObj = new ProductsLookUpService();
    });

    describe('getSortOptions method', ()=>{
        it('should read sort options from config object', ()=>{
                expect(productsLookupServiceObj.getSortOptions()).to.deep.eq(config.sortOptions);
        })
    })

    describe('getDefaultFilters method', ()=>{
        it('should read sort options from config object', ()=>{
                expect(productsLookupServiceObj.getDefaultFilters()).to.deep.eq(config.defaultFilters);
        })
    })

    describe('getProductCategories method', ()=>{
        it('should read sort options from config object', ()=>{
                expect(productsLookupServiceObj.getProductCategories()).to.deep.eq(config.productCategories);
        })
    })

    describe('getPriceRanges method', ()=>{
        it('should read priceRanges from config object', ()=>{
                expect(productsLookupServiceObj.getPriceRanges()).to.deep.eq(config.priceRanges);
        })
    })
});