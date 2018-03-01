
import template from './star.rating.html';
import controller from './star.rating.controller';
import './star.rating.scss';

let RatingComponent = {
  bindings: {    
    ratingValue: '=',
    maxRating: '=',
    onRatingSelected: '&'
  },
  template,
  controller,
  controllerAs : 'starRate'
};

export default RatingComponent;
