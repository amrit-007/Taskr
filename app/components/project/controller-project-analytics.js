'use strict';

taskrApp.controller('TaskAnalyticsController', ['$scope', '$stateParams',
    function($scope,$stateParams){
    // Do something here
    $scope.tasks = [];
    console.log("Project Analytics Controller Initialized");
    console.log($stateParams);
}]);
