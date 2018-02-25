
import template from './star.rating.html';
import StarRatingController from './star.rating.controller';
import './star.rating.scss';

let RatingComponent = {
  bindings: {    
    ratingValue: '=',
    max: '=',
    onRatingSelected: '&'
  },
  template,
  controller : StarRatingController,
  controllerAs : 'starRate'
};

export default RatingComponent;
