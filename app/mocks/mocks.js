/**
 * Entry point for all mock modules.
 * Each new mock module should be added as dependency to this module
 */
(function() {
  'use strict';

  // Disable or enable mocks
  var enableMocks = true;

  if (enableMocks) {
    angular.module('mocks', ['clientResourceMocks']);
  } else {
    angular.module('mocks', []);
  }

}());