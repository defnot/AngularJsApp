(function () {
  'use strict';

  //from mocks
  //  "username": "agrion",
  //  "password": "Pass123$"

  angular
    .module('Agrion')
    .controller('Login', Login);

  Login.$inject = ['$window', 'UserService'];

  function Login($window, UserService) {
    var vm = this;

    //scope functions
    vm.login = login;

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
  }
})();
