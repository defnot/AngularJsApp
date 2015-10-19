(function() {
  'use strict';

  angular.module('Agrion')
    .controller('LegalEntityCtrl', ['client', LegalEntityCtrl]);

  function LegalEntityCtrl(client) {
    var vm = this;
    vm.client = client;
  }
}());