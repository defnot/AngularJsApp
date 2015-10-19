(function() {
  'use strict';

  angular.module('clientFilters', []).filter('clientTypeFilter', function() {
    return function(input) {
      return input == 1 ? 'Физ. Лице' : 'Юр. Лице';
    };
  });
}());