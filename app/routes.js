(function () {
  'use strict';

  angular.module('Agrion')
    .config(['$stateProvider',
      '$urlRouterProvider',
      SetRoutes
    ]);

  function SetRoutes($stateProvider, $urlRouterProvider) {
    // For unmatched routes
    $urlRouterProvider.otherwise('/');

    // Application routes
    $stateProvider
      .state('home', {
        url: '',
        templateUrl: 'app/templates/home.html'
      })
      .state('clients', {
        url: '/clients',
        templateUrl: 'app/templates/clients/clients.html'
      })
      .state('individual', {
        url: '/individual',
        templateUrl: 'app/templates/clients/individualEntity.html',
        controller: 'IndividualEntityCtrl as vm',
        resolve: {
          client: function () { return undefined; }
        }
      })
      .state('editIndividual', {
        // the object part of the url should NOT contain any white space chars!
        url: '/individual/{clientId:int}',
        templateUrl: 'app/templates/clients/individualEntity.html',
        controller: 'IndividualEntityCtrl as vm',
        resolve: {
          clientResource: 'clientResource',

          client: function (clientResource, $stateParams) {
            var clientId = $stateParams.clientId;

            return clientResource.get({ clientId: clientId }).$promise;
          }
        }
      })
      .state('legal', {
        url: '/legal',
        templateUrl: 'app/templates/clients/legalEntity.html'
      })
      .state('editLegal', {
        // the object part of the url should NOT contain any white space chars!
        url: '/legal/{clientId:int}',
        templateUrl: 'app/templates/clients/legalEntity.html',
        controller: 'LegalEntityCtrl as vm',
        resolve: {
          clientResource: 'clientResource',

          client: function (clientResource, $stateParams) {
            var clientId = $stateParams.clientId;

            return clientResource.get({
              clientId: clientId
            }).$promise;
          }
        }
      })
      .state('offerClientData', {
        url: '/offerclientdata',
        templateUrl: 'app/templates/offer/offer-client-data.html'
      })
      .state('offer', {
        url: '/offer',
        templateUrl: 'app/templates/offer/offer.html',
        controller: 'OfferCtrl as vm'
      })
      .state('reports', {
        url: '/reports',
        templateUrl: 'app/templates/reports/reports.html'
      })
      .state('offerInfo', {
        url: '/offerInfo/{applicationId:int}',
        templateUrl: 'app/templates/offer/offerInfo.html'
      });
  }
}());
