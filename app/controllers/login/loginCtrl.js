(function () {
  'use strict';

  //from mocks
  //  "username": "agrion",
  //  "password": "Pass123$"

  angular
    .module('Agrion')
    .controller('Login', Login);

  Login.$inject = ['$window', '$rootScope', 'UserService'];

  function Login($window, $rootScope, UserService) {
    var vm = this;

    //scope functions
    vm.login = login;
    vm.logout = logout;
    vm.isUserLogged = isUserLogged;
    vm.getCurrentUsername = getCurrentUsername;

    /**
     * Attempt to login the user
     */
    function login() {
      if (UserService.login(vm.username, vm.password)) {
        $window.history.back(); //try to redirect to the last loaded url
      } else {
        alert("The provided username and password are wrong.");
      }
    }

    /**
     * Attempts to logout the user
     */
    function logout() {
      UserService.logout();
    }

    /**
     * Returns if the there is currently logged user
     */
    function isUserLogged() {
      return UserService.isUserLogged();

    }

    /**
     * Gets the current username
     */
    function getCurrentUsername() {
      return UserService.getCurrentUsername();
    }

  }
})();
