(function () {
  'use strict';

  angular.module('Agrion')
    .controller('OfferCtrl', ['$http', OfferCtrl]);

  function OfferCtrl($http) {

    var vm = this;
    vm.offerTable = [];
    vm.printPDF = printPDF;
    vm.submitOffer = submitOffer;
    vm.currencies = [
    { code: 'BGN', name: 'BGN' },
    { code: 'EUR', name: 'EUR' },
    { code: 'USD', name: 'USD'}
    ];
    vm.interestModels = [
    { code: 'първи', name: 'първи' },
    { code: 'втори', name: 'втори' }
    ];

    vm.validateTotalSum = validateTotalSum;
    vm.validatePositiveInteger = validatePositiveInteger;
    vm.validateForm = validateForm;
    vm.showData = showData;

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
          'Дължима сума:              '         .concat(totalSum),
          '35 месечни вноски от:  '             .concat(monthlyPayment),
          'Цяла лихва:                      '   .concat(totalInterest),
          'Сума на заема:               '       .concat(loanAmount),
          'Лихвa %:                            '.concat(interestPercent),
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
      success(function(data) {
        vm.offerTable = data;
      });
    }
  }
}());
