// import ProductsListModule from './products.list.module'

// describe('Products List', () => {
//   let $rootScope, $state, $location, $componentController, $compile;

//   beforeEach(window.module(ProductsListModule));

//   beforeEach(inject(($injector) => {
//     $rootScope = $injector.get('$rootScope');
//     $componentController = $injector.get('$componentController');
//     $state = $injector.get('$state');
//     $location = $injector.get('$location');
//     $compile = $injector.get('$compile');
//   }));

//   describe('Module', () => {
//     // top-level specs: i.e., routes, injection, naming
//     it('default component should be productsList', () => {
//       $location.url('/');
//       $rootScope.$digest();
//       expect($state.current.component).to.eq('productsList');
//     });
//   });

//   describe('Controller', () => {
//     // controller specs
//     let controller;
//     beforeEach(() => {
//       controller = $componentController('productsList', {
//         $scope: $rootScope.$new()
//       });
//     });

//     it('has a selectableOptions property', () => { // erase if removing this.name from the controller
//       expect(controller).to.have.property('selectableOptions');
//     });
//   });

//   describe('View', () => {
//     // view layer specs.
//     let scope, template;

//     beforeEach(() => {
//       scope = $rootScope.$new();
//       template = $compile('<products-list></products-list>')(scope);
//       scope.$apply();
//     });

//     it('has collapse-panel in template', () => {
//       expect(template.find('collapse-panel')).to.not.null;
//     });

//     it('has checkbox-list in template', () => {
//       expect(template.find('checkbox-list')).to.not.null;
//     });
//   });
// });
