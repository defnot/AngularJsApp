(function() {
  'use strict';

  angular.module('Agrion')
    .controller('IndividualEntityCtrl', ['$http', '$state', 'client', IndividualEntityCtrl]);

  function IndividualEntityCtrl($http, $state, client) {

    var vm = this;

    //all nationalities
    vm.nationalities = ["Afghan","Albanian","Algerian","American","Andorran","Angolan","Antiguans","Argentinean","Armenian","Australian",
                    "Austrian","Azerbaijani","Bahamian","Bahraini","Bangladeshi","Barbadian","Barbudans","Batswana","Belarusian","Belgian",
                    "Belizean","Beninese","Bhutanese","Bolivian","Bosnian","Brazilian","British","Bruneian","Bulgarian","Burkinabe","Burmese",
                    "Burundian","Cambodian","Cameroonian","Canadian","Cape Verdean","Central African","Chadian","Chilean","Chinese","Colombian",
                    "Comoran","Congolese","Costa Rican","Croatian","Cuban","Cypriot","Czech","Danish","Djibouti","Dominican","Dutch","East Timorese",
                    "Ecuadorean","Egyptian","Emirian","Equatorial Guinean","Eritrean","Estonian","Ethiopian","Fijian","Filipino","Finnish","French",
                    "Gabonese","Gambian","Georgian","German","Ghanaian","Greek","Grenadian","Guatemalan","Guinea-Bissauan","Guinean","Guyanese","Haitian",
                    "Herzegovinian","Honduran","Hungarian","Icelander","Indian","Indonesian","Iranian","Iraqi","Irish","Israeli","Italian","Ivorian","Jamaican",
                    "Japanese","Jordanian","Kazakhstani","Kenyan","Kittian and Nevisian","Kuwaiti","Kyrgyz","Laotian","Latvian","Lebanese","Liberian","Libyan",
                    "Liechtensteiner","Lithuanian","Luxembourger","Macedonian","Malagasy","Malawian","Malaysian","Maldivan","Malian","Maltese","Marshallese","Mauritanian",
                    "Mauritian","Mexican","Micronesian","Moldovan","Monacan","Mongolian","Moroccan","Mosotho","Motswana","Mozambican","Namibian","Nauruan","Nepalese",
                    "Netherlander","New Zealander","Ni-Vanuatu","Nicaraguan","Nigerian","Nigerien","North Korean","Northern Irish","Norwegian","Omani","Pakistani",
                    "Palauan","Panamanian","Papua New Guinean","Paraguayan","Peruvian","Polish","Portuguese","Qatari","Romanian","Russian","Rwandan","Saint Lucian",
                    "Salvadoran","Samoan","San Marinese","Sao Tomean","Saudi","Scottish","Senegalese","Serbian","Seychellois","Sierra Leonean","Singaporean","Slovakian",
                    "Slovenian","Solomon Islander","Somali","South African","South Korean","Spanish","Sri Lankan","Sudanese","Surinamer","Swazi","Swedish","Swiss","Syrian",
                    "Taiwanese","Tajik","Tanzanian","Thai","Togolese","Tongan","Trinidadian or Tobagonian","Tunisian","Turkish","Tuvaluan","Ugandan","Ukrainian","Uruguayan",
                    "Uzbekistani","Venezuelan","Vietnamese","Welsh","Yemenite","Zambian","Zimbabwean"];

    if (client) {
      vm.client = client;
    } else {
      // required client model
      vm.client = {
        clientId: '', // TODO: Make random string generator
        addresses: [{
          city: '',
          country: '',
          post_code: '',
          region: '',
          street: '',
          phone: ''
        }],
        client_type: 1,
        first_name: '',
        middle_name: '',
        last_name: '',
        document_number: '',
        eik: '',
        num_dds: '',
        birth_date: '',
        sex: '',
        zp_reg_number: ''
      };
    }

    //submiting form
    vm.registerClient = function() {
      $http.post('/api/clients', vm.client).success(function(data, status, headers) {
        $state.go('clients');
      });
    };

    vm.checkRequiredFields = checkRequiredFields;

    function checkRequiredFields() {
      // console.log('TODO implement button validation');
      return vm.containsOnlyLetters(vm.client.first_name) &&
        vm.containsOnlyLetters(vm.client.middle_name) &&
        vm.containsOnlyLetters(vm.client.last_name) &&
        vm.checkEgn(vm.client.egn) &&
        vm.containsOnlyDigits(vm.client.document_number);
    }

    //validates eik
    vm.checkEik = function(v) {

      var matches;
      if (!(matches = v.match(/^(BG)?((\d{9})(\d{4})?)$/))) {
        return false;
      }
      //1*а1+2*а2+3*а3+4*а4+5*а5+6*а6+7*а7+8*а8;
      var a = matches[3];
      var a9 = a[0] * 1 + a[1] * 2 + a[2] * 3 + a[3] * 4 + a[4] * 5 + a[5] * 6 + a[6] * 7 + a[7] * 8;
      a9 = a9 % 11;

      if (a9 == 10) {
        //3*а1+4*а2+5*а3+6*а4+7*а5+8*а6+9*а7+10*а8
        a9 = a[0] * 3 + a[1] * 4 + a[2] * 5 + a[3] * 6 + a[4] * 7 + a[5] * 8 + a[6] * 9 + a[7] * 10;
        a9 = a9 % 11;
      }

      a9 = a9 == 10 ? 0 : a9;

      if (a9 != a[8])
        return false;
      if (!matches[4]) {
        vm.client.num_dds = 'BG' + vm.client.eik;
        return true;
      }
      //2*а9 + 7*а10 + 3*а11 +5*а12
      a = matches[4];
      var a13 = a9 * 2 + a[0] * 7 + a[1] * 3 + a[2] * 5;
      a13 = a13 % 11;

      //4*а9+9*а10+5*а11+7*а12
      if (a13 == 10) {
        a13 = a9 * 4 + a[0] * 9 + a[1] * 5 + a[2] * 7;
        a13 = a13 % 11;
      }

      a13 = a13 == 10 ? 0 : a13;

      if (a13 == a[3]) {
        vm.client.num_dds = 'BG' + vm.client.eik;
        return true;
      }
      return false;

    };

    //validates egn
    vm.checkEgn = function(egn) {


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
      var weights = [2, 4, 8, 5, 10, 9, 7, 3, 6];

      for (var ii = 0; ii < weights.length; ++ii) {
        checkSum += weights[ii] * Number(egn.charAt(ii));
      }

      checkSum %= 11;
      checkSum %= 10;

      if (checkSum !== Number(egn.charAt(9)))
        return false;

      vm.client.sex = getSex(egn);
      vm.client.birth_date = getDate(egn);
      return true;

    };

    //used for egn validation
    function isValidDate(y, m, d) {
      var date = new Date(y, m - 1, d);
      return date && (date.getMonth() + 1) == m && date.getDate() == Number(d);
    }
    //gets sex of the client
    function getSex(egn) {

      var sexChar = Math.floor(parseInt(egn) / 10) % 10;
      if (sexChar % 2 === 0) {
        return 'Мъж';
      } else {
        return 'Жена';
      }
    }
    //gets bday of the client
    function getDate(egn) {
      var year = Math.floor(parseInt(egn) / 100000000);
      var month = Math.floor(parseInt(egn) / 1000000) % 100;
      var day = Math.floor(parseInt(egn) / 10000) % 100;

      if (Math.floor(day / 10) === 0) {
        day = '0' + day;
      }

      if (Math.floor(month / 10) === 0) {
        month = '0' + month;
      }

      if (Math.floor(year / 10) % 10 === 0) {
        year = '0' + year;
      }

      if (month < 13) {
        year = '19' + year;
      }

      if (month >= 41 && month <= 49) {
        month = month % 10;
        month = '0' + month;
        year = '20' + year;
      }

      if (month >= 50) {
        month = month % 10;
        month = '1' + month;
        year = '20' + year;
      }

      return day + '/' + month + '/' + year;

    }

    vm.containsOnlyDigits = function(input) {
      var regexp = /^\d+$/;
      return regexp.test(input);
    };

    vm.containsOnlyLetters = function(input) {
      var regexp = /^[a-zA-Zа-яА-Я]+$/;
      return regexp.test(input);
    };

  }
}());
