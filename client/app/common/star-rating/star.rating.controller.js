class StarRatingController {
  constructor() {
	  this.stars = [];
  }

toggle(index) {
			this.ratingValue = index + 1;			
			this.updateStars();
			if(this.onRatingSelected && typeof(this.onRatingSelected)=== 'function'){
				this.onRatingSelected({rating: index + 1});	
			}
		};

  updateStars() {
			this.stars = [];
			for (var i = 0; i < this.max; i++) {
				this.stars.push({
					filled: i < this.ratingValue
				});
			}
		};

  $onInit() {
		this.updateStars();
  }
  
}

StarRatingController.$inject = [];

export default StarRatingController;
