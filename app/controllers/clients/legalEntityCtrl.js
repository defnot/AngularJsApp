(function() {
  'use strict';

  angular.module('Agrion')
    .controller('LegalEntityCtrl', ['$http', '$state', 'client', LegalEntityCtrl]);

  function LegalEntityCtrl($http, $state, client) {
    var vm = this;

    vm.generateDDS = generateDDS;

    if (client) {
      vm.client = client;
    } else {
      vm.client = {
        branches: ['Земеделие', 'Животновъдство'],
        risk_groups: [1, 2, 3, 4, 5],
        zp_reg_number: '098123740912',
        eik: ''
      };
    }

    vm.registerClient = registerClient;

    function registerClient () {
      console.log('client: %o', vm.client);
    }

    function generateDDS (value) {
      console.log(value);
    }
  }
}());
