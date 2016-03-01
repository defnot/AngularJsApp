(function () {
  'use strict';

  angular.module('Agrion')
    .controller('OfferCtrl', OfferCtrl);

  OfferCtrl.$inject = ['$http', '$stateParams', '$window', '$filter'];

  function OfferCtrl($http, $stateParams, $window, $filter) {
    var vm = this;
    var show = true;
    //variables
    vm.offerTable = [];
    vm.allSessionsTable = [];
    vm.singleSessionTable = [];

    vm.operator = {
      id: 'op2910',
      name: 'Стойко Дамянов',
      phone: '+359 888 383 833'
    };

    vm.clientTypes = {
      availableOptions: [{
        name: 'Физическо Лице',
        id: 0
      }, {
        name: 'Юридическо Лице',
        id: 1
      }],
      selected: {
        id: 0,
        name: 'Физическо Лице'
      }
    };

    vm.offerModels = [
      'Анюитетни вноски',
      'Намаляващи вноски'
    ];

    vm.currencies = [{
        code: 'BGN',
        name: 'BGN'
      },
      {
        code: 'EUR',
        name: 'EUR'
      }, {
        code: 'USD',
        name: 'USD'
      }
    ];
    vm.selectedCurrency = vm.currencies[0];
    vm.applicationInfo = []; //getApplicationInfo();
    vm.allApplications = $window.ApplicationMocks.applications;


    //functions
    vm.printPDF = printPDF;
    vm.submitOffer = submitOffer;
    vm.makeOffer = makeOffer;
    vm.validateTotalSum = validateTotalSum;
    vm.validatePositiveInteger = validatePositiveInteger;
    vm.validateForm = validateForm;
    vm.showData = showData;
    vm.trackAllSessions = trackAllSessions;
    vm.trackSingleSession = trackSingleSession;
    vm.showSession = showSession;
    vm.saveApplication = saveApplication;
    vm.autoCompleteCompleted = autoCompleteCompleted;
    vm.format = 'dd-MMMM-yyyy';
    vm.text = "Покажи всички потребители";

    init();

    //used another variable because of the date format conversation
    vm.ApplicationDateAdded = new Date(vm.applicationInfo.dateAdded);

    //===================================================================
    //Functions included into the controller scope
    //===================================================================

    function showData() {
      $('#dataField').removeClass('ng-hide');
    }
    function showSession() {
        if(show === true) {
            vm.text = "Покажи само този потребител";
            $('#allUsers').removeClass('ng-hide').addClass('ng-show');
            $('#singleUser').removeClass('ng-show').addClass('ng-hide');
            show = false;
        } else {
            vm.text = "Покажи всички потребители";
            $('#allUsers').removeClass('ng-show').addClass('ng-hide');
            $('#singleUser').removeClass('ng-hide').addClass('ng-show');
            show = true;
        }
    }
    function validateTotalSum(input) {
      //var regexp = /^[+]?([,]\d+|\d+[,]?\d*)$/;
      var regexp = /^/;
      return regexp.test(input);
    }

    function validatePositiveInteger(input) {
      var regexp = /^[1-9]\d*$/;
      return regexp.test(input);
    }

    function validateForm() {
      return vm.validateTotalSum(vm.loan) &&
        vm.validateTotalSum(vm.interest) &&
        vm.validatePositiveInteger(vm.numpayments) &&
        vm.validatePositiveInteger(vm.years);
    }

    function printPDF() {
      var totalSum = $('#totalSum').text().replace(/\s{2,}/g, ' ');
      var monthlyPayment = $('#monthlyPayment').text().replace(/\s{2,}/g, ' ');
      var totalInterest = $('#totalInterest').text().replace(/\s{2,}/g, ' ');
      var loanAmount = $('#loanAmount').text().replace(/\s{2,}/g, ' ');
      var interestPercent = $('#interestPercent').text().replace(/\s{2,}/g, ' ');
      var currentdate = new Date();
      var datetime = currentdate.getDate() + "/" + (currentdate.getMonth() + 1) + "/" + currentdate.getFullYear();
      // Table body
      var body = [];
      var headers = [{
        text: 'Номер на вноска',
        style: 'tableHeader'
      }, {
        text: 'Сума на заема',
        style: 'tableHeader'
      }, {
        text: 'Главница на вноска',
        style: 'tableHeader'
      }, {
        text: 'Лихва на вноска',
        style: 'tableHeader'
      }, {
        text: 'Вноска',
        style: 'tableHeader'
      }];

      body.push(headers);

      // Getting table data and converting it to the proper format for pdfmake
      var tableData = $('#table').tableToJSON();
      for (var prop in tableData) {
        var dataRow = [];
        dataRow.push({
          text: tableData[prop]['Номер на вноска']
        }, {
          text: tableData[prop]['Сума на заема']
        }, {
          text: tableData[prop]['Главница на вноска']
        }, {
          text: tableData[prop]['Лихва на вноска']
        }, {
          text: tableData[prop]['Вноска']
        });
        body.push(dataRow);
      }

      var docDefinition = {
        content: [{
            text: 'Оферта',
            style: 'header'
          },
          // The spaces in the strings matter for the pdf format!!
          'Дължима сума:              '.concat(totalSum),
          '35 месечни вноски от:  '.concat(monthlyPayment),
          'Цяла лихва:                      '.concat(totalInterest),
          'Сума на заема:               '.concat(loanAmount),
          'Лихвa %:                            '.concat(interestPercent),
          '                      ',
          'Дата: '.concat(datetime),
          '                      ', {
            table: {
              // headers are automatically repeated if the table spans over multiple pages
              // you can declare how many rows should be treated as headers
              headerRows: 1,
              body: body
            }
          }
        ],
        styles: {
          header: {
            fontSize: 18,
            bold: true,
            margin: [0, 0, 0, 10]
          },
          tableHeader: {
            bold: true,
            fontSize: 11,
            color: 'black'
          }
        },
        defaultStyle: {
          // alignment: 'justify'
        }
      };
      $window.pdfMake.createPdf(docDefinition).open();
    }
    ////
    function submitOffer() {
      $http.get('http://localhost:9000/calculateEMI', {
        params: {
          loan: vm.loan,
          annualInterest: vm.interest,
          paymentsPerYear: vm.numpayments,
          loanPeriodYears: vm.years,
          gracePeriod: vm.gratis,
          promotionalPeriod: vm.promotional,
          promotionalInterest: vm.promotional_interest

        }
      }).
      success(function (data) {
        vm.offerTable = data;
      });
    }

    function submitOfferEPP() {
      $http.get('https://spcreditbackend.herokuapp.com/calculateEPP', {
        params: {
          loan: vm.loan,
          annualInterest: vm.interest,
          paymentsPerYear: vm.numpayments,
          loanPeriodYears: vm.years,
          gracePeriod: vm.gratis,
          promotionalPeriod: vm.promotional,
          promotionalInterest: vm.promotional_interest
        }
      }).
      success(function (data) {
        vm.offerTable = data;
      });
    }
    function trackAllSessions() {
        $http.get('https://spcreditbackend.herokuapp.com/allSessions', {})
            .success(function(data) {
                vm.allSessionsTable = data;
            });
    }
      function trackSingleSession() {
          $http.get('https://spcreditbackend.herokuapp.com/singleSess', {})
              .success(function(data) {
                  vm.singleSessionTable = data;
              });
      }
    function makeOffer() {
      var option = $('#loanType')[0].selectedOptions[0].value;

      if (option === vm.offerModels[0]) {
        submitOffer();
      } else {
        submitOfferEPP();
      }
    }

    /**
     * Getting an application from a global json variable, based on a value from the url
     * @return the applicaiton object
     */
    function getApplicationInfo() {
      var applicationId = $stateParams.applicationId;
      var offerInfo = {};

      for (var i = 0; i < $window.ApplicationMocks.applications.length; i++) {
        if ($window.ApplicationMocks.applications[i].id === applicationId) {
          offerInfo = $window.ApplicationMocks.applications[i];
          break;
        }
      }

      setLoanInfo(offerInfo);

      return offerInfo;
    }

    /**
     * Aligning data from the current application with the data already defined in the form
     * @param {string} offerInfo The current application information
     */
    function setLoanInfo(offerInfo) {
      if (offerInfo !== undefined) {
        vm.loan = offerInfo.loan;
        vm.interest = offerInfo.annualInterest;
        vm.numpayments = offerInfo.paymentsPerYear;
        vm.years = offerInfo.loanPeriodYears;
        vm.selectedCurrency.name = offerInfo.currency;
        //vm.offerType.name = offerInfo.offerType;
      }
    }

    /**
     * Saves an application request
     */
    function saveApplication() {
      var newId;
      var applicationId = $stateParams.applicationId;
      if (applicationId >= 0) {
        newId = applicationId;
      } else {
        //setting default values for физическо лице
        newId = $window.ApplicationMocks.applications.length + 1;
        vm.applicationInfo.address = "some dummy address";
        vm.applicationInfo.company = "some dummy company name";
        vm.applicationInfo.dds = "2062175689";
        vm.applicationInfo.eik = "9563851938";
        vm.applicationInfo.email = "user@company.com";
        vm.applicationInfo.phone = "088734752";
        vm.applicationInfo.status = "изчакващ";
        vm.applicationInfo.userId = generateGuid();

        if (vm.clientTypes.selected.id === 1) { //юридическо лице
          vm.applicationInfo.egn = "2703149893";
          vm.applicationInfo.firstName = "dummyFirstName";
          vm.applicationInfo.lastName = "dummyLastName";
        }
      }

      var applicationInfo = {
        "offerType": vm.applicationInfo.offerType,
        "loanPeriodYears": vm.years,
        "paymentsPerYear": vm.numpayments,
        "annualInterest": vm.interest,
        "operatorId": vm.operator.id,
        "egn": vm.applicationInfo.egn,
        "dds": vm.applicationInfo.dds,
        "eik": vm.applicationInfo.eik,
        "region": vm.applicationInfo.region,
        "branch": vm.applicationInfo.branch,
        "address": vm.applicationInfo.address,
        "phone": vm.applicationInfo.phone,
        "email": vm.applicationInfo.email,
        "company": vm.applicationInfo.company,
        "lastName": vm.applicationInfo.lastName,
        "firstName": vm.applicationInfo.firstName,
        "currency": vm.selectedCurrency.name,
        "loan": vm.loan,
        "status": vm.applicationInfo.status,
        "userId": vm.applicationInfo.userId,
        "dateAdded": vm.applicationInfo.dateAdded,
        "id": newId,
        "clientType": vm.clientTypes.selected.id
      };

      //remove the old item in oreder to be updated with the new one
      if (applicationId >= 0) {
        for (var i = 0; i < $window.ApplicationMocks.applications.length; i++) {
          if ($window.ApplicationMocks.applications[i].id === applicationId) {
            $window.ApplicationMocks.applications.splice(i,1);
            break;
          }
        }
      }

      $window.ApplicationMocks.applications.push(applicationInfo);
      $window.toastr.success('The applicaiton has been saved');
    }

    /**
     * Fires when angular autocomplete alt selects values and loads the selected application data
     * @param  {the object which was seleted} selected The application info for the selected object
     */
    function autoCompleteCompleted(selected) {
      if (selected !== undefined) {
        vm.applicationInfo = selected.originalObject;
        setLoanInfo(selected.originalObject);
      }
    }

    //===================================================================
    //Functions not included into the controller scope
    //===================================================================

    /**
     * Loads the view panels depending the current state of the page
     */
    function init() {
      vm.clientTypes.selected.id = 0; //Физическо Лице'
      vm.applicationInfo.dateAdded = new Date();
      vm.applicationInfo.id = $window.ApplicationMocks.applications.length + 1;

      if ($stateParams.applicationId !== undefined) {
        setEditMode();
      }
    }

    /**
     * Loads the view panels, used during the edit mode
     */
    function setEditMode() {
      $("#newApplicationPanel").hide();
      vm.applicationInfo = getApplicationInfo();

      vm.clientTypes.selected.id = vm.applicationInfo.clientType;
      loadClientPanel(vm.applicationInfo);
      makeOffer();
    }

    /**
     * Shows or hide the panels, created for editing the differente types of users
     * @param  {applicationInfo} clientData - Information about the currently opened applicaiton
     */
    function loadClientPanel(clientData) {
      if (clientData.clientType === 0) {
        $("#fsIndividualEntity").show();
        $("#fsLegalEntity").hide();
      } else if (clientData.clientType === 1) {
        $("#fsLegalEntity").show();
        $("#fsIndividualEntity").hide();
      }
    }

    /**
     * Generate GUID (see http://stackoverflow.com/a/2117523/364657)
     * @return {string} the generated guid number
     */
    function generateGuid() {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0,
          v = c === 'x' ? r : r & 0x3 | 0x8;
        return v.toString(16);
      });
    }

  }
}());
