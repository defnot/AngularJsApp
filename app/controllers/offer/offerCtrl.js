(function () {
  'use strict';

  angular.module('Agrion')
    .controller('OfferCtrl', ['$http', '$stateParams', OfferCtrl]);

  function OfferCtrl($http, $stateParams) {

    var vm = this;
    vm.offerTable = [];
    vm.printPDF = printPDF;
    vm.submitOffer = submitOffer;
    vm.makeOffer = makeOffer;
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
      }, // На Дамян кода - НЕ ПИПАЙ
      {
        code: 'EUR',
        name: 'EUR'
      }, {
        code: 'USD',
        name: 'USD'
      }
    ];
    vm.selectedCurrency = vm.currencies[0];

    vm.validateTotalSum = validateTotalSum;
    vm.validatePositiveInteger = validatePositiveInteger;
    vm.validateForm = validateForm;
    vm.showData = showData;
    vm.addApplication = addApplication;

    vm.applicationInfo = getApplicationInfo();

    function showData() {
      $('#dataField').removeClass('ng-hide');
    }

    function validateTotalSum(input) {
      var regexp = /^[+]?([.]\d+|\d+[.]?\d*)$/;
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
      pdfMake.createPdf(docDefinition).open();
    }
    ////
    function submitOffer() {

      $http.get('http://localhost:9000/calculateEMI', {
        params: {
          loan: vm.loan,
          annualInterest: vm.interest,
          paymentsPerYear: vm.numpayments,
          loanPeriodYears: vm.years
        }
      }).
      success(function (data) {
        vm.offerTable = data;
      });
    }

    function submitOfferEPP() {
      $http.get('http://localhost:9000/calculateEPP', {
        params: {
          loan: vm.loan,
          annualInterest: vm.interest,
          paymentsPerYear: vm.numpayments,
          loanPeriodYears: vm.years
        }
      }).
      success(function (data) {
        vm.offerTable = data;
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
      var offerInfo = ApplicationMocks.applications[applicationId];

      loadLoanInfo(offerInfo);

      return offerInfo;
    }

    /**
     * Aligning data from the current application with the data already defined in the form
     */
    function loadLoanInfo(offerInfo) {
      if ($stateParams.applicationId >= 0) {
        vm.loan = offerInfo.loan;
        vm.interest = offerInfo.annualInterest;
        vm.numpayments = offerInfo.paymentsPerYear;
        vm.years = offerInfo.loanPeriodYears;
        vm.selectedCurrency.name = offerInfo.currency;
        //vm.offerType.name = offerInfo.offerType;
      }
    }

      function addApplication() {
        var newId;
        if ($stateParams.applicationId >= 0) {
          newId = $stateParams.applicationId;
        } else {
          newId = ApplicationMocks.applications.count + 1;
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
          "dateAdded": new Date(),
          "id": newId
        };

        ApplicationMocks.applications.push(applicationInfo);
      }
  }
}());
