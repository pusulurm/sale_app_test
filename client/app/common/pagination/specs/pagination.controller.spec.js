var sinon = require('sinon');
import PaginationController from '../pagination.controller';

describe("PaginationController", () => {
    let paginationControllerObj = null,
        paginationServiceObj = {
            getPreviousPages: sinon.spy(),
            getNextPages: sinon.spy(),
            GetPager: sinon.spy()
        };

    beforeEach(() => {
        paginationControllerObj = new PaginationController(paginationServiceObj);
        paginationControllerObj.pager = { currentPage: 5, pageSize: 20, totalPages: 6, startPage: 1, endPage: 6, pages: [4, 5, 6] };
    })

    describe('$onChanges method', () => {
        it('should call "GetPager" method of pagerservice', () => {
            paginationControllerObj.$onChanges({ totalPages: { currentValue: 20 } });
            sinon.assert.calledOnce(paginationServiceObj.GetPager);
        })
    })

    describe('selectPreviousPage method', () => {
        it('should call "informPaginationChange" after changing current page', () => {
            paginationControllerObj.informPaginationChange = sinon.spy();
            paginationControllerObj.selectPreviousPage({ totalPages: { currentValue: 20 } });
            sinon.assert.calledOnce(paginationControllerObj.informPaginationChange);
        })
    })

    describe('getNextPagesList method', () => {
        it('should call "getNextPages" of pager service', () => {
            paginationControllerObj.getNextPagesList();
            sinon.assert.calledOnce(paginationServiceObj.getNextPages);
        })
    })

    describe('getPreviousPagesList method', () => {
        it('should call "getNextPages" of pager service', () => {
            paginationControllerObj.getPreviousPagesList();
            sinon.assert.calledOnce(paginationServiceObj.getPreviousPages);
        })
    })
})