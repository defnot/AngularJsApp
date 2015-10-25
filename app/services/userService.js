(function () {
  'use strict';

  angular
    .module('Agrion')
    .service('UserService', UserService);

  UserService.$inject = ['$rootScope', '$window', 'constants'];

  function UserService($rootScope, $window, constants) {

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

      if (username === $window.ApplicationMocks.users.username && password === $window.ApplicationMocks.users.password) {
        localStorage.setItem(constants.USERNAME_LOCALSTORAGE_KEY, $window.ApplicationMocks.users.username);

        _currentUsername = username;
        _isUserLogged = true;

        isSuccessfull = true;
      }

      return isSuccessfull;
    }

    /**
     * Sets the user credentials into the localStorage
     */
    function logout() {
      if (localStorage.getItem(constants.USERNAME_LOCALSTORAGE_KEY)) {
        localStorage.removeItem(constants.USERNAME_LOCALSTORAGE_KEY);
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
