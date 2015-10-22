(function () {
  'use strict';

  angular
    .module('Agrion')
    .controller('ReportsCtrl', ReportsCtrl);

    ReportsCtrl.$inject = ['$window'];


  function ReportsCtrl($window) {
    var vm = this;

    vm.applications = $window.ApplicationMocks.applications;
  }

})();
