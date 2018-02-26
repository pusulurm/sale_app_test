import angular from 'angular';
import uiRouter from 'angular-ui-router';

import sidebarComponent from './side.bar.component';

var sidebarModuleName = 'sephora.test.side.bar';

angular.module(sidebarModuleName, [
  uiRouter
])
.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('sidebar', {
      url: '/',
      component: 'sidebar'
    });
})
.component('sidebar', sidebarComponent);

export default sidebarModuleName;
