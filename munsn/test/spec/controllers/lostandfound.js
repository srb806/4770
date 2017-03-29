'use strict';

describe('Controller: LostandfoundCtrl', function () {

  // load the controller's module
  beforeEach(module('munsnApp'));

  var LostandfoundCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LostandfoundCtrl = $controller('LostandfoundCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(LostandfoundCtrl.awesomeThings.length).toBe(3);
  });
});
