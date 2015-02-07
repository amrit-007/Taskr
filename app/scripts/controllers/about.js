'use strict';

/**
 * @ngdoc function
 * @name taskrApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the taskrApp
 */
angular.module('taskrApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
