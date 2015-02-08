'use strict';

taskrApp.controller('BodyCtrl', ['$scope', '$rootScope',
    function($scope, $rootScope){
    // Do something here
    console.log("Body Controller Initiated");
    $scope.projects = [];
    
    //GET all projects
    for(var i=0;i<20;i++) {
      $scope.projects.push({id:i, name:"Project"+i});
    }
}]);
