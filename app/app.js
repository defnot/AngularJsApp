/**
 * Main module. Disabling/Enabling of mocks is done
 *  through the mocks module itself
 */
(function () {
  'use strict';

  angular.module('Agrion', ['ui.router',
      'commonServices',
      'mocks',
      'clientFilters',
      'ngAnimate',
      'ui.bootstrap',
      'angucomplete-alt',
      'directives'      
    ])
    .run(CheckAuthentication)
    .constant('constants', {
      "USERNAME_LOCALSTORAGE_KEY": 'username'
    });

  function CheckAuthentication($rootScope, $location, $window, $injector) {
    var userService = $injector.get('UserService');

    $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
      var requireLogin = false; //asumes, that the login requred views should be marked implicitly
      if (toState.data !== undefined) {
        requireLogin = toState.data.requireLogin;
      }

      if (requireLogin && !userService.isUserLogged()) {
        event.preventDefault();

        $location.path("/login.html");
        $window.location.href = '/login.html';
      }
    });

  }

}());
