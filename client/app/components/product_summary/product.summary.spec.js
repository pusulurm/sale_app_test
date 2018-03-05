var sinon = require('sinon');
import ProductSummaryModule from './product.summary.module'

describe('Product Summary Component', () => {
    let $rootScope, $componentController, $compile;

    beforeEach(window.module(ProductSummaryModule));

    beforeEach(inject(($injector) => {
        $rootScope = $injector.get('$rootScope');
        $componentController = $injector.get('$componentController');
        $compile = $injector.get('$compile');
    }));

    describe('View', () => {
        // view layer specs.
        let scope, template;

        beforeEach(() => {
            scope = $rootScope.$new();
            scope.productDetails = {
                attributes: {
                    name: "Product Name",
                    sold_out: true,
                    category: "tools",
                    price: 3011,
                    under_sale: true,
                    sale_price: 1551,
                },
            }
            template = $compile('<product-summary product-details="productDetails"></product-summary>')(scope);
            scope.$apply();
        });

        it('should have star-rating element in template', () => {
            expect(!template.find('star-rating')['0']).to.be.false;
        });
    });
});
