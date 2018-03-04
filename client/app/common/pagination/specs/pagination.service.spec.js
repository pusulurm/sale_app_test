import PaginationService from '../pagination.service';

describe('pagination.service', () => {
    let paginationsServiceObj = null;

    beforeEach(() => {
        paginationsServiceObj = new PaginationService();
    })

    describe('GetPager method', () => {
        it("should return valid pager object based on totalPages number provided", () => {
            let expectedPager = { currentPage: 1, pageSize: 20, totalPages: 15, startPage: 1, endPage: 15, pages: [1, 2, 3] },
                pager = paginationsServiceObj.GetPager(15, 1, 20, 3);
                expect(pager).to.deep.eq(expectedPager);
        })
    })

    describe("getNextPages method", () => {
        it("should return pager eith new set of pages", () => {
            let expectedPages = [4, 5, 6],
                currentPager = { currentPage: 1, pageSize: 20, totalPages: 6, startPage: 1, endPage: 6, pages: [1, 2, 3] };

            let updatedPager = paginationsServiceObj.getNextPages(currentPager, 3);
            expect(updatedPager.pages).to.deep.eq(expectedPages);
        })
    })

    describe("getPreviousPages method", () => {
        it("should return pager eith new set of pages", () => {
            let expectedPages = [1, 2, 3],
                currentPager = { currentPage: 5, pageSize: 20, totalPages: 6, startPage: 1, endPage: 6, pages: [4, 5, 6] };

            let updatedPager = paginationsServiceObj.getPreviousPages(currentPager, 3);
            expect(updatedPager.pages).to.deep.eq(expectedPages);
        })
    })

})