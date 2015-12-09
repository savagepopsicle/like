var myApp = angular.module('like', ['like.services', 'like.browse', 'like.dashboard', 'like.login', 'ngRoute']);

myApp.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
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
    .when('/dashboard', {
      templateUrl : './templates/dashboard.html',
      controller: 'dahsboardCtrl'
    });
});
