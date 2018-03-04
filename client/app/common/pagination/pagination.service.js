class PaginationService {
    constructor() {
    }

    getPreviousPages(currentPager, showPagesCount) {
        let pages = [];

        for (let i = 1; i <= showPagesCount; i++) {
            if (currentPager.pages[0] - i >= currentPager.startPage) {
                pages.push(currentPager.pages[0] - i);
            }
        }
        currentPager.pages = pages.reverse();
        currentPager.currentPage = currentPager.pages[currentPager.pages.length - 1];
        return currentPager;
    }

    getNextPages(currentPager, showPagesCount) {
        let pages = [];

        for (let i = 1; i <= showPagesCount; i++) {
            if (currentPager.pages[showPagesCount - 1] + i <= currentPager.endPage) {
                pages.push(currentPager.pages[showPagesCount - 1] + i);
            }
        }
        currentPager.pages = pages;
        currentPager.currentPage = currentPager.pages[0];

        return currentPager;
    }

    GetPager(totalPages, currentPage, pageSize, showPagesCount) {

        currentPage = currentPage || 1;

        var startPage = 1, endPage = totalPages || 0;

        let pages = [];

        for (let i = 1; i <= showPagesCount; i++) {
            if (i <= totalPages) {
                pages.push(i);
            }
        }

        return {
            currentPage: currentPage,
            pageSize: pageSize,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            pages: pages
        };
    }
}

PaginationService.$inject = [];

export default PaginationService;