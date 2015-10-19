(function() {
  'use strict';

  angular.module('clientFilters', [])
    .filter('clientTypeFilter', clientTypeFilter)
    .filter('clientDisplayNameFilter', clientDisplayNameFilter)
    .filter('clientAddressFilter', clientAddressFilter);

  function clientTypeFilter() {
    return function(input) {
      return input == 1 ? 'Физ. Лице' : 'Юр. Лице';
    };
  }

  function clientDisplayNameFilter () {
    return function(input) {
      if (input.client_type == 1) {
        return input.first_name + ' ' + input.middle_name + ' ' + input.last_name;
      }

      return input.company_name_bg;
    };
  }

  function clientAddressFilter () {
    return function(input) {
      return input.country + ', ' + input.city + ', ' + input.street;
    };
  }
}());