import ProductsListService from '../products.list.service';

describe('products.lookup.service', () => {
    let $httpBackend, $q, productsListServiceObj;

    beforeEach(inject(($injector) => {
        $httpBackend = $injector.get('$httpBackend');
        $q = $injector.get('$q');
        
        productsListServiceObj = new ProductsListService($httpBackend, $q);
    }))
    describe('prepareUrl method', () => {
        it('should not add querystring when no filters provided', () => {
            let finalUrl = productsListServiceObj.prepareUrl();
            expect(finalUrl.indexOf("?")).to.eq(-1);
        })

        it('should add "category_eq" filter in querystring when provided single category option', () => {
            let selectedFilters = { category: "test" }, expectedQueryStringPart = 'filter[category_eq]=test';
            let finalUrl = productsListServiceObj.prepareUrl(selectedFilters);
            expect(finalUrl.indexOf(expectedQueryStringPart)).to.gt(-1);
        })

        it('should add "category_in" filter in querystring when provided multiple category option', () => {
            let selectedFilters = { category: "test,anotherTest" }, expectedQueryStringPart = 'filter[category_in]=test,anotherTest';
            let finalUrl = productsListServiceObj.prepareUrl(selectedFilters);
            expect(finalUrl.indexOf(expectedQueryStringPart)).to.gt(-1);
        })

        it('should add "sale_price_lt" filter in querystring when provided price range with less than option', () => {
            let selectedFilters = { priceRange: { lt: 500 } }, expectedQueryStringPart = 'filter[sale_price_lt]=500', nonExpected = "sale_price_gt";
            let finalUrl = productsListServiceObj.prepareUrl(selectedFilters);
            expect(finalUrl.indexOf(expectedQueryStringPart)).to.gt(-1);

            expect(finalUrl.indexOf(nonExpected)).to.eq(-1);
        })

        it('should add both "sale_price_gt" filter in querystring when provided price range with greater than option', () => {
            let selectedFilters = { priceRange: { gt: 200 } }, expectedQueryStringPart = 'filter[sale_price_gt]=200', nonExpected = "sale_price_lt";
            let finalUrl = productsListServiceObj.prepareUrl(selectedFilters);
            expect(finalUrl.indexOf(expectedQueryStringPart)).to.gt(-1);

            expect(finalUrl.indexOf(nonExpected)).to.eq(-1);
        })

        it('should add "sale_price_gt" and "sale_price_lt" filter in querystring when provided price range with greater than and less than option', () => {
            let selectedFilters = { priceRange: { lt: 500, gt: 200 } },
                expectedQueryStringPart1 = 'filter[sale_price_gt]=200',
                expectedQueryStringPart2 = 'filter[sale_price_lt]=500';
            let finalUrl = productsListServiceObj.prepareUrl(selectedFilters);

            expect(finalUrl.indexOf(expectedQueryStringPart1)).to.gt(-1);
            expect(finalUrl.indexOf(expectedQueryStringPart2)).to.gt(-1);
        })

        it('should add "&sort=" filter in querystring when provided sort option', () => {
            let selectedFilters = { sortBy: { label: "Name (A to Z)", value: "name" } }, expectedQueryStringPart = '&sort=name';
            let finalUrl = productsListServiceObj.prepareUrl(selectedFilters);
            expect(finalUrl.indexOf(expectedQueryStringPart)).to.gt(-1);
        })

        it('should add "&page[size]=" filter in querystring when provided sort option', () => {
            let selectedFilters = { pageSize: 30 }, expectedQueryStringPart = '&page[size]=30';
            let finalUrl = productsListServiceObj.prepareUrl(selectedFilters);
            expect(finalUrl.indexOf(expectedQueryStringPart)).to.gt(-1);
        })
    });

    describe("prepareResponse method", ()=>{
        let response = {};

        beforeEach(() =>{
             response = {
                data : {
                    links : {
                        last : "https://sephora-api-frontend-test.herokuapp.com/products?filter%5Bcategory_eq%5D=tools&page%5Bnumber%5D=3&page%5Bsize%5D=25"
                    },
                    data : []
                }
            };
        });
        it("should read pageNumber from response links and return", ()=>{
            
            let result = productsListServiceObj.prepareResponse(response);
            expect(result.pageNumber).to.eq(3);
        })

        it("should not read pageNumber from response when 'doNotRefreshPagination' parameter is true", ()=>{
            let result = productsListServiceObj.prepareResponse(response, true);
            expect(result.pageNumber).to.eq(undefined);
        })
    })
})