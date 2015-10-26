(function() {
    'use strict';

    angular
        .module('directives')
        .directive('userPanel', userPanel);

    function userPanel() {
        var directive = {
            restrict: 'EA',
            template: '<div class="login-wrapper">' +
            '  <div id="loggedUserPanel" ng-show="vm.isUserLogged()">' +
            '    Здравейте' +
            '    <strong>{{vm.getCurrentUsername()}}</strong>' +
            '    <a href="#" role="button" class="btn btn-link" ng-click="vm.logout()">Излез</a>' +
            '  </div>' +
            '  <div id="anonymousUserPanel" ng-show="vm.isUserLogged() == false">' +
            '    <a href="login.html" title="Вход в системата">' +
            '      <span class="login-icon"></span>' +
            '    </a>' +
            '  </div>' +
            '</div>',
            //templateUrl: 'app/directives/userPanelTemplate.html',
            scope: {
            },
            //link: linkFunc,
            controller: UserPanel,
            controllerAs: 'vm',
            bindToController: true
        };

        return directive;

        // function linkFunc(scope, el, attr, ctrl) {
        //
        // }
    }

    UserPanel.$inject = ['$window', 'UserService'];

    function UserPanel($window, UserService) {
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
            alert("Потребителското име и паролата са грешни");
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
