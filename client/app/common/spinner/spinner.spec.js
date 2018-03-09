var sinon = require('sinon')

import SpinerModule from './spinner.module'

describe('Spinner Module', () => {
  let $rootScope, $componentController, $compile;

  beforeEach(window.module(SpinerModule));

  beforeEach(inject(($injector) => {
    $rootScope = $injector.get('$rootScope');
    $componentController = $injector.get('$componentController');
    $compile = $injector.get('$compile');
  }));

  describe('Controller', () => {

  });

  describe('View', () => {
    // view layer specs.
    let scope, template;

    beforeEach(() => {
    })
  })
});
