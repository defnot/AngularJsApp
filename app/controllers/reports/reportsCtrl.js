(function () {
  'use strict';

  angular
    .module('Agrion')
    .controller('ReportsCtrl', ReportsCtrl);

    //ReportsCtrl.$inject = ['$filter'];


  function ReportsCtrl() {
    var vm = this;

    vm.applications = ApplicationMocks.applications;
  }

})();
