var sinon = require('sinon')

import StarRatingModule from './star.rating.module'

describe('Star Rating', () => {
  let $rootScope, $componentController, $compile;

  beforeEach(window.module(StarRatingModule));

  beforeEach(inject(($injector) => {
    $rootScope = $injector.get('$rootScope');
    $componentController = $injector.get('$componentController');
    $compile = $injector.get('$compile');
  }));

  describe('Controller', () => {
    // controller specs
    let controller;
    beforeEach(() => {
      controller = $componentController('starRating', {
        $scope: $rootScope.$new()
      });
    });

    it('should have property stars', () => { // erase if removing this.name from the controller
      expect(controller).to.have.property('stars');
    });

    describe('$onInit method', () => {
      it('should call method updateStars', () => {
        controller.updateStars = sinon.spy();
        controller.$onInit();
        sinon.assert.calledOnce(controller.updateStars);
      })
    });

    describe('updateStars method', () => {
      it('should initialize max number of stars suplied', () => {
        controller.max = 5;
        controller.updateStars();
        expect(controller.stars.length).to.equal(5);
      })

      it('should have highlited stars based on rating', () => {
        controller.max = 5;
        controller.ratingValue = 3;
        controller.updateStars();
        expect(controller.stars.filter(a => a.filled === true).length).to.equal(3);
      })
    });

    describe('toggle method', () => {
      it('should call method updateStars', () => {
        controller.updateStars = sinon.spy();
        controller.toggle(2);
        sinon.assert.calledOnce(controller.updateStars);
      })

      it('should set rating value as per input', () => {
        controller.updateStars = sinon.spy();
        controller.toggle(2);
        expect(controller.ratingValue).to.equal(3);
      })

      it('should call onRatingSelected when suplied', () => {
        controller.updateStars = sinon.spy();
        controller.onRatingSelected = sinon.spy();
        controller.toggle(2);
        sinon.assert.calledOnce(controller.onRatingSelected);
      })
    });
  });

  describe('View', () => {
    // view layer specs.
    let scope, template;

    beforeEach(() => {
      scope = $rootScope.$new();
      scope.rating = {
        current: 4,
        max: 5
      }
      template = $compile('<star-rating rating-value="rating.current" max="rating.max"></star-rating>')(scope);
      scope.$apply();
    });

    it('should render 5 li elements', () => {
      expect(template.find('li').length).to.equal(5);
    });

    it('should fill only 4 stars as rating is 4', () => {
      expect(template.find('li')[0].classList.contains('filled')).to.eq(true);
      expect(template.find('li')[1].classList.contains('filled')).to.eq(true);
      expect(template.find('li')[2].classList.contains('filled')).to.eq(true);
      expect(template.find('li')[3].classList.contains('filled')).to.eq(true);
      expect(template.find('li')[4].classList.contains('filled')).to.eq(false);
    });
  });
});
