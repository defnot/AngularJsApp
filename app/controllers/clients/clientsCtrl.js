(function() {
  'use strict';

  angular
    .module('Agrion')
    .controller('ClientsCtrl', ['$http', '$state', ClientsCtrl]);

  function ClientsCtrl($http, $state) {
    var vm = this;

    vm.promptDeleteClientId = '';

    vm.setClients = setClients;

    // fill clients table on load
    vm.setClients();

    // // TODO:
    // vm.sortType = 'name'; // set the default sort type
    // vm.sortReverse = false; // set the default sort order
    // vm.searchClient = ''; // set the default search/filter term
    //
    vm.getClients = function() {
      // activate fancy tooltips
      $(document).ready(function() {
        $('[data-toggle=tooltip]').tooltip();
      });

      return vm.clients;
    };
    //
    vm.editClient = editClient;

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
     * Handle edit client click by navigating to editLegal/editPhysical client view.
     *
     * @param  {object} client - the client data object
     */
    function editClient (client) {

      if (client.client_type != 1) {
        // redirect to the legal view
        $state.go('editLegal', {clientId: client.id});
      } else {
        // TODO: Call individual view
      }
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
