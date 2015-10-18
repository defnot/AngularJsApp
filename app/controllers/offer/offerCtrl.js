(function() {
  'use strict'

  angular.module("Agrion")
    .controller("OfferCtrl", ['$http', OfferCtrl]);

  function OfferCtrl($http) {

    var vm = this;
    vm.offerTable = [];
    vm.printPDF = printPDF;
    vm.submitOffer = submitOffer;

    function printPDF() {

      var totalSum = $("#totalSum").text().trim();
      var monthlyPayment = $("#monthlyPayment").text().trim();
      var totalInterest = $("#totalInterest").text().trim();
      var loanAmount = $("#loanAmount").text().trim();
      var interestPercent = $("#interestPercent").text().trim();

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
      var tableData = $("#table").tableToJSON();
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
        })
        body.push(dataRow);
      }

      var docDefinition = {
        content: [{
            text: 'Оферта',
            style: 'header'
          },
          // The spaces matter for formatting!!
          'Дължима сума:          '.concat(totalSum),
          '35 месечни вноски от:  '.concat(monthlyPayment),
          'Цяла лихва:            '.concat(totalInterest),
          'Сума на заема:         '.concat(loanAmount),
          'Лихвa %:               '.concat(interestPercent),
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
