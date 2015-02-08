'use strict';

taskrApp.controller('ProjectController', ['$scope',
    function($scope){
    // Do something here
    $scope.tasks = [];
    console.log("Project Controller Initiated");
    //GET all tasks
    
    for(var i=0;i<20;i++) {
      $scope.tasks.push({id:i, name:"Task"+i});
    }
}]);
