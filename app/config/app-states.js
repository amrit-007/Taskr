'use strict';

taskrApp.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: 'components/main/main.html',
    controller: 'MainCtrl'
  })
  .state('about', {
    url: '/about',
    templateUrl: 'components/about/about.html',
    controller: 'AboutCtrl'
  })

}]);
// ttl.config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
//   function($stateProvider, $urlRouterProvider, $locationProvider) {

//   $urlRouterProvider.otherwise('/');

//   $urlRouterProvider.rule(function($injector, $location) {
//     var path = $location.path();
//     var hasTrailingSlash = path[path.length-1] === '/';
//     if(hasTrailingSlash) {
//       //if last charcter is a slash, return the same url without the slash  
//       var newPath = path.substr(0, path.length - 1); 
//       return newPath; 
//     } 
    
//   });

//   $stateProvider
    
    
    
// }]);
