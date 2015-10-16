/**
 * Main module. Disabling/Enabling of mocks is done
 *  through the mocks module itself
 */
(function() {
  'use strict';

  angular.module('Agrion', ['ui.router', 'commonServices', 'mocks']);

}());