var sinon = require('sinon');
import ProductModule from './product.module'

describe('Product Component', () => {
    let $rootScope, $componentController, $compile;

    beforeEach(window.module(ProductModule));

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
            template = $compile('<product></product>')(scope);
            scope.$apply();
        });

        it('has product-summary element in template', () => {
            expect(template.find('product-summary')['0']).to.not.null;
        });
    });
});
