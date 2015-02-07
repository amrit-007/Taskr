'use strict';

/**
 * @ngdoc function
 * @name taskrApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the taskrApp
 */
angular.module('taskrApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
