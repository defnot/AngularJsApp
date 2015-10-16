  (function(){

    "use strict";
    angular.module('Agrion')
			.controller("IndividualEntityCtrl", [IndividualEntityCtrl]);


    function IndividualEntityCtrl(){
        var vm = this;


        //submiting form
        vm.registerClient = function() {
          alert("implement submit to mock service")
        }

        //validates egn
        vm.checkEgn = function (egn) {
            if (!egn || egn.length != 10)
                return false;
            if (/[^0-9]/.test(egn))
                return false;
            var year = Number(egn.slice(0, 2));
            var month = Number(egn.slice(2, 4));
            var day = Number(egn.slice(4, 6));

            if (month >= 40) {
                year += 2000;
                month -= 40;
            } else if (month >= 20) {
                year += 1800;
                month -= 20;
            } else {
                year += 1900;
            }

            if (!isValidDate(year, month, day))
                return false;

            var checkSum = 0;
            var weights = [2,4,8,5,10,9,7,3,6];

            for (var ii = 0; ii < weights.length; ++ii) {
                checkSum += weights[ii] * Number(egn.charAt(ii));
            }

            checkSum %= 11;
            checkSum %= 10;

            if (checkSum !== Number(egn.charAt(9)))
                return false;

            vm.sex = getSex(egn);
            vm.birthDate = getDate(egn);
            return true;

        }

        //used for egn validation
        function isValidDate(y, m, d) {
          var date = new Date(y, m - 1, d);
          return date && (date.getMonth() + 1) == m && date.getDate() == Number(d);
        }
        //gets sex of the client
        function getSex(egn) {

         var sexChar = Math.floor(parseInt(egn) / 10) % 10
         if(sexChar % 2 == 0) {
          return "Мъж";
         } else {
           return "Жена";
         }
       }
       //gets bday of the client
       function getDate(egn) {
         var year = Math.floor(parseInt(egn) / 100000000);
         var month = Math.floor(parseInt(egn) / 1000000) % 100;
         var day = Math.floor(parseInt(egn) / 10000) % 100;

         if (Math.floor(day/10) == 0) {
           day = "0"+day;
         }

         if(Math.floor(month/10) == 0){
           month = "0" + month;
         }

         if(Math.floor(year/10) % 10 == 0 ) {
           year = "0" + year;
         }

         if(month < 13) {
           year = "19" + year;
         }

         if (month >= 41 && month <= 49) {
           month = month % 10;
           month = "0" + month;
            year = "20" + year;
         }

         if (month >= 50) {
           month = month % 10;
           month = "1" + month;
           year = "20" + year;
         }

        return day + "/" + month + "/" + year;

       }

       vm.containsOnlyDigits = function(documentNumber){
         var regexp = /^\d+$/;
         var valid = regexp.test(documentNumber);
         return valid;
       }


    }
}());
