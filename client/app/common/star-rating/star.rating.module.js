import angular from 'angular';
import StarRatingComponent from './star.rating.component';
import './star.rating.scss';
let ratingModule = 'common.star.rating.module';

angular
.module(ratingModule, [])
.component('starRating', StarRatingComponent);

export default ratingModule;
