'use strict';

taskrApp.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('home', {
    url: '/',
    controller: 'MainCtrl',
    views: {
      "ProjectDetailsView": {
        templateUrl: "components/main/main.html"
      }, 
      "TaskDetailsView": {
        templateUrl: "components/about/about.html"
      }
    }
  })
  .state('project', {
    url: '/project/{projectId}', 
    views: {
      "ProjectDetailsView": {
        templateUrl: "components/shared/projectpaneView.html",
        controller: "ProjectController"
      }, 
      "TaskDetailsView": {
        templateUrl: "components/project/projectanalytics.html",
        controller: "TaskAnalyticsController"
      }
    }
  })
    .state('project.task', {
      url: '/{taskId}', 
      views: {
        "TaskDetailsView@": {
          templateUrl: "components/shared/individualtaskpaneView.html",
          controller: "TaskController"
        }
      }
    })
}]);