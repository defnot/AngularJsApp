(function () {
  'use strict';

  // Attempt at creating an input filtering directive
  angular.module('Agrion')
    .directive('numberInputFormat', function($filter) {
      return {
        scope: {
          amount  : '='
        },
        link: function(scope, el, attrs) {

           el.bind('focus', function(){
              el.val(scope.amount);
           });

           el.bind('input', function(){
            scope.amount = el.val();
            scope.$apply();
           });

           el.bind('blur', function(){
            el.val($filter('customCurrency')(scope.amount));
           });
        }
      };
    });

}());
