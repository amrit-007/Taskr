'use strict';

/**
 * @ngdoc overview
 * @name taskrApp
 * @description
 * # taskrApp
 *
 * Main module of the application.
 */
var taskrApp = angular
  .module('taskrApp', [
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'ui.bootstrap'
  ])
  .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $locationProvider.hashPrefix('!');

  }])
  .constant('TaskrVersion', '0.0.1');
