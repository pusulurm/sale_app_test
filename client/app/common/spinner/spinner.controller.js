class SpinnerController {
	constructor() {

	}

	$onInit() {
		this.showSpinner = false;
	}

	$onChanges(changes) {
		if (changes && changes.spinnerPromise) {
			if (changes.spinnerPromise.currentValue) {
				this.showSpinner = true;
				changes.spinnerPromise.currentValue.then(() => {
					this.showSpinner = false;
				}, err => {
					this.showSpinner = false;
				})
			}
			else {
				this.showSpinner = false;
			}
		}
		else {
			this.showSpinner = false;
		}
	}

}

SpinnerController.$inject = [];

export default SpinnerController;
