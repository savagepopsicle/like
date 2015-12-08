var myApp = angular.module('like', ["ngRoute", 'like.service']);

myApp.config(function($routeProvider, $httpProvider){
  $routeProvider
    .when('/',{
      templateUrl : './templates/login.html',
      controller : 'loginCtrl'
    })
    .when('/register', {
      templateUrl : './templates/register.html',
      controller : 'authCtrl'
    })
    .when('/browse', {
      templateUrl : './templates/browse.html',
      controller : 'browseCtrl'
    })
    .when('/dashboard',{
      templateUrl : './templates/dashboard.html',
      controller: 'dahsboardCtrl'
    });
});