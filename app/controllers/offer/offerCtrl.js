(function() {
  'use strict'

  angular.module("Agrion")
    .controller("OfferCtrl", ['$http', OfferCtrl]);

  function OfferCtrl($http) {

    var vm = this;

    vm.submitOffer = submitOffer;

    function submitOffer() {
      $http.get('http://localhost:9000/calculateEMI', {
        params: {
          loan: vm.loan,
          annualInterest: vm.interest,
          paymentsPerYear: vm.numpayments,
          loanPeriodYears: vm.years
        }
      }).
      success(function(data) {
        vm.offerTable = data;
      });
    }
  }

}());