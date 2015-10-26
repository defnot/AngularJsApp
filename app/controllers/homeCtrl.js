(function () {
  'use strict';

  angular
    .module('Agrion')
    .controller('HomeCtrl', HomeCtrl);

  HomeCtrl.$inject = ['UserService'];

  function HomeCtrl(UserService) {
    var vm = this;

    vm.isCurrentUserAuthenticated = isCurrentUserAuthenticated();

    /**
     * Checks if the the current user is authenticated on the system
     * @return {Boolean} [If the users is authenticated]
     */
    function isCurrentUserAuthenticated() {
      return UserService.isUserLogged();
    }
  }
})();
