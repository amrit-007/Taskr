'use strict';

taskrApp.directive('taskrfooter', [
  function () {
    // Runs during compile
    return {
      // name: '',
      // priority: 1,
      // terminal: true,
      scope: {
        // "status": "="
      }, // {} = isolate, true = child, false/undefined = no change
      controller: ['$scope', function ($scope) {

            }],
      // require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
      restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
      // template: '<div>Achha hai {{status}}</div>',
      templateUrl: 'components/shared/footer.html'
      // replace: true,
      // transclude: true,
      // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
      // link: function ($scope, iElm, iAttrs, controller) {

      // }
    };
  }
]);
