class PaginationController {
	constructor(paginationService) {
		this.paginationService = paginationService;
		this.informPaginationChange = this.informPaginationChange.bind(this);
	}


	informPaginationChange() {
		if (this.onPaginationChange) {
			this.onPaginationChange()({ pageSize: this.pageSize, currentPage: this.pager.currentPage })
		}
	}

	setPage(selectedPage) {
		if (selectedPage === this.pager.currentPage) {
			return;
		}
		this.pager.currentPage = selectedPage;
		this.informPaginationChange();
	}

	getPreviousPagesList() {
		this.pager = this.paginationService.getPreviousPages(this.pager, this.showPagesCount);
		this.informPaginationChange();
	}

	getNextPagesList() {
		this.pager = this.paginationService.getNextPages(this.pager, this.showPagesCount);
		this.informPaginationChange();
	}

	selectNextPage() {
		if (this.pager.pages.indexOf(this.pager.currentPage + 1) > -1) {
			this.pager.currentPage = this.pager.currentPage + 1;
		}
		else {
			this.getNextPagesList();
			this.pager.currentPage = this.pager.pages[0];
		}
		this.informPaginationChange();
	}

	selectPreviousPage() {
		if (this.pager.pages.indexOf(this.pager.currentPage - 1) > -1) {
			this.pager.currentPage = this.pager.currentPage - 1;
		}
		else {
			this.getPreviousPagesList();
			this.pager.currentPage = this.pager.pages[this.showPagesCount - 1];
		}
		this.informPaginationChange();
	}

	onPageSizeChange(){
		this.pager.currentPage= 1;
		this.informPaginationChange();
	}

	$onChanges(changes) {
		if (changes.totalPages.currentValue) {
			this.pager = this.paginationService.GetPager(changes.totalPages.currentValue, 1, this.pageSize, this.showPagesCount);
		}
		else {
			this.pager = {};
		}
	}

	$onInit() {

		this.allPageSizes = [10, 30, 50, 100];
		this.showPagesCount = this.showPagesCount || 3;
		this.pageSize = 30;
		this.pager = {};

		if (this.totalPages)
			this.setPage(this.totalPages, 1, this.pageSize, this.showPagesCount);
	}
}

PaginationController.$inject = ['pagination.service'];

export default PaginationController;
