(function () {
  'use strict';

  angular
    .module('Agrion')
    .controller('HomeCtrl', HomeCtrl);

  HomeCtrl.$inject = ['UserService'];

  function HomeCtrl(UserService) {
    var vm = this;

    vm.isCurrentUserAuthenticated = UserService.isUserLogged();
    vm.logout = logout;
    vm.isUserLogged = isUserLogged;
    vm.getCurrentUsername = getCurrentUsername;

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
