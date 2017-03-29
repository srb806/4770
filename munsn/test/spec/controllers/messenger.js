'use strict';

describe('Controller: MessengerCtrl', function () {

  // load the controller's module
  beforeEach(module('munsnApp'));

  var MessengerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MessengerCtrl = $controller('MessengerCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MessengerCtrl.awesomeThings.length).toBe(3);
  });
});
