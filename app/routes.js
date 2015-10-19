(function() {
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
      // .state('client', {
      //   url: '/client',
      //   templateUrl: 'app/templates/clients/client.html',
      // })
      .state('individual', {
        url: '/individual',
        templateUrl: 'app/templates/clients/individualEntity.html'
      })
      .state('legal', {
        url: '/legal',
        templateUrl: 'app/templates/clients/legalEntity.html'
      })
      .state('editLegal', {
        url: '/legal/{clientId:int}',
        templateUrl: 'app/templates/clients/legalEntity.html',
        controller: 'LegalEntityCtrl as vm',
        resolve: {
          clientResource: 'clientResource',

          client: function(clientResource, $stateParams) {
            var clientId = $stateParams.clientId;

            return clientResource.get({ clientId: clientId }).$promise;
          }
        }
      })
      .state('offer', {
        url: '/offer',
        templateUrl: 'app/templates/offer/offer.html',
        controller: 'OfferCtrl as vm'
      })
      .state('offerClientData', {
        url: '/offerclientdata',
        templateUrl: 'app/templates/offer/offer-client-data.html'
      });
  }
}());
