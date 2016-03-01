(function () {
  'use strict';

  angular
    .module('Agrion')
    .service('UserService', UserService);

  UserService.$inject = ['$http','$rootScope', '$window', 'constants'];

  function UserService($http,$rootScope, $window, constants) {

    var serviceResult = {
      login: login,
      logout: logout,
      isUserLogged: isUserLogged,
      getCurrentUsername: getCurrentUsername
    };

    //local variables
    var _isUserLogged;
    var _currentUsername;

    //execute local functions
    _setLocalVariables();

    /**
     *  Sets the user credentials into the localStorage
     * @param  {string} username The username
     * @param  {string} password The password
     * @return {bool}          If the login process was successfull
     */
    function login(username, password) {
        var isSuccessfull = false;
        for(var i = 0; i < $window.ApplicationMocks.users.length; i++) {
            var user = $window.ApplicationMocks.users[i];
            if(username == user.username && password == user.password) {
                localStorage.setItem(constants.USERNAME_LOCALSTORAGE_KEY, user.username);
//
                _currentUsername = username;
                _isUserLogged = true;
//
                isSuccessfull = true;

                $http({
                    method: 'GET',
                    url: 'https://spcreditbackend.herokuapp.com/makeLogin',
                    params: {
                        email: username,
                        password: password
                    }
                }).then(function successCallback(data, status, headers, config) {
                    isSuccessfull = true;
                }, function errorCallback(data, status, headers, config) {
                    isSuccessfull = false;
                });

            }
        }
        return isSuccessfull;
    }

    /**
     * Sets the user credentials into the localStorage
     */
    function logout() {
      if (localStorage.getItem(constants.USERNAME_LOCALSTORAGE_KEY)) {
        localStorage.removeItem(constants.USERNAME_LOCALSTORAGE_KEY);
          $http({
              method: 'GET',
              url: 'https://spcreditbackend.herokuapp.com/makeLogout'
          }).then(function successCallback(data, status, headers, config) {

          }, function errorCallback(data, status, headers, config) {

          });
      }

      _currentUsername = null;
      _isUserLogged = false;
    }

    /**
     * Returns if the there is currently logged user
     */
    function isUserLogged() {
      return _isUserLogged;
    }

    /**
     * Gets the current username
     */
    function getCurrentUsername() {
      return _currentUsername;
    }

    /**
     * Set initial values of the local variables
     */
    function _setLocalVariables() {
      var currentUsername = localStorage.getItem(constants.USERNAME_LOCALSTORAGE_KEY);

      if (currentUsername !== null && currentUsername !== undefined) {
        _isUserLogged = true;
        _currentUsername = currentUsername;
      } else {
        _isUserLogged = false;
        _currentUsername = null;
      }
    }

    return serviceResult;
  }
})();
