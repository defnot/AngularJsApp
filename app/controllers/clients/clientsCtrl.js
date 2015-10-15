(function() {
  'use strict';

  angular
    .module('Agrion')
    .controller('ClientsCtrl', ClientsCtrl);

  function ClientsCtrl($http) {
    var vm = this;

    // make a get request to obtain all clients
    // the request url is not valid and currently captured by the mock service
    $http.get('/api/clients').success(function(data, status, headers) {
      vm.clients = data;
    });

    // // TODO:
    // vm.sortType = 'name'; // set the default sort type
    // vm.sortReverse = false; // set the default sort order
    // vm.searchClient = ''; // set the default search/filter term
    //
    vm.getClients = function() {
      return vm.clients;
    };
    //
    // vm.edit = function (clientId) {
    // 	alert(clientId);
    // };
    //
    // vm.delete = function (clientId) {};

  }

}());