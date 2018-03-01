class CheckboxListController {

  constructor() {
      this.selectedOtpions = [];
  }

  toggleSelection(option) {
    if (this.selectedOtpions.indexOf(option) > -1) {
      this.selectedOtpions.splice(this.selectedOtpions.indexOf(option), 1);
    }
    else {
      this.selectedOtpions.push(option);
    }
    if(this.onSelectionChanged){
        this.onSelectionChanged()(this.selectedOtpions);
    }
  }

  $onInit() {

  }
}

export default CheckboxListController;
