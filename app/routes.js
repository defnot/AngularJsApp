(function () {
	'use strict';

	angular.module("Agrion")
		.config(['$stateProvider',
			'$urlRouterProvider',
			SetRoutes
		]);

	function SetRoutes($stateProvider, $urlRouterProvider) {
		// For unmatched routes
		$urlRouterProvider.otherwise('/');

		// Application routes
		$stateProvider
			.state("home", {
				url: '',
				templateUrl: "app/templates/home.html"
			})
			.state("clients", {
				url: '/clients',
				templateUrl: "app/templates/clients/clients.html",
				controller: "ClientsCtrl as vm"
			})
			.state('client', {
				url: '/client',
				templateUrl: 'app/templates/clients/client.html'
			})
			.state('client.physical', {
				url: '/physical',
				templateUrl: 'app/templates/clients/individualEntity.html',
				controller: 'IndividualEntityCtrl as vm'
			})
			.state('client.legal', {
				url: '/legal',
				templateUrl: 'app/templates/clients/legalEntity.html',
				controller: 'LegalEntityCtrl as vm'
			})
			.state("offer", {
				url: '/offer',
				templateUrl: "app/templates/offer/offer.html",
				controller: "OfferCtrl as vm"
			})
      .state("reports", {
        url: '/reports',
        templateUrl: "app/templates/reports/reports.html"
      })
      .state("offerInfo", {
        url: '/offerInfo/{applicationId:int}',
        templateUrl: "app/templates/offer/offerInfo.html"
      });
	}
}());
