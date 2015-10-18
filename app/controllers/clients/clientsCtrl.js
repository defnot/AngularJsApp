(function() {
  'use strict';

  angular
    .module('Agrion')
    .controller('ClientsCtrl', ClientsCtrl);

  function ClientsCtrl($http) {
    var vm = this;

    vm.promptDeleteClientId = '';

    vm.setClients = setClients;

    vm.setClients();

    // // TODO:
    // vm.sortType = 'name'; // set the default sort type
    // vm.sortReverse = false; // set the default sort order
    // vm.searchClient = ''; // set the default search/filter term
    //
    vm.getClients = function() {
      return vm.clients;
    };
    //
    vm.editClient = function (client) {

    	if (client.client_type != 1) {
        // TODO: Call legal view
      } else {
        // TODO: Call individual view
      }
    };

    vm.deleteClient = deleteClient;

    $('#deleteClientModal').on('show.bs.modal', function (event) {
      var button = $(event.relatedTarget); // Button that triggered the modal
      var id = button.data('id');

      $http.get('/api/clients/' + id).success(function(data, status, headers) {
        if (data) {
          vm.promptDeleteClientName = data.company_name_bg;
          vm.promptDeleteClientId = id;
        }

      });
    });

    $('#deleteClientModal').on('hidden.bs.modal', function (event) {
        // Clear client name variable
        vm.promptDeleteClientId = '';
    });

    function deleteClient () {
      $http.delete('/api/clients/' + vm.promptDeleteClientId).success(function(data, status, headers) {
        vm.setClients();
      });
    }

    /**
     * Make a get request to obtain all clients the request url
     * is not valid and currently captured by the mock service
     */
    function setClients () {
      $http.get('/api/clients').success(function(data, status, headers) {
        vm.clients = data;
      });
    }

  }

}());