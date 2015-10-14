(function(){
'use strict'

angular.module("Agrion")
  .controller("OfferCtrl",
['$http',OfferCtrl]);

    function OfferCtrl($http){

        var vm = this;

        vm.submitOffer = function(){$http.get('http://localhost:9000/tableRows',
          {params: {
                baseLoanAmount: vm.loan,
                loanPercent: vm.interest,
                numOfPaymentsPerYear: vm.numpayments,
                years: vm.years
                }} ).
            success(function(data) {
                vm.offerTable = data;
            });
          }


  }

}());
