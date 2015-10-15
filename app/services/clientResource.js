(function() {
  'use strict';

  angular
    .module('commonServices')
    .factory('clientResource', ['$resource', clientResource]);

  function clientResource($resource) {
    return $resource('/api/clients/:clientId');
  }
}())