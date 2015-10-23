(function() {
    'use strict';

    angular
        .module('Agrion')
        .controller('Login', Login);

    Login.$inject = ['$window'];

    function Login($window) {
        var vm = this;

        //functions
        vm.login = login;

        //Implemented scope functions
        function login(){
            if(vm.username === $window.ApplicationMocks.users.username
              && vm.password === $window.ApplicationMocks.users.password){
                localStorage.setItem('username', $window.ApplicationMocks.users.username);
            }
        }

    }
})();
