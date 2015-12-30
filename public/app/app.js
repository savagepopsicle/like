var myApp = angular.module('like', ['ngMaterial', 'like.register', 'like.browse', 'like.dashboard', 'like.login', 'like.profile', 'like.voting', 'ngRoute', 'ngAnimate']);
myApp.controller('likeCtrl', function ($scope, $location) {
  $scope.path = {curPath: $location.path()};
});

myApp.config(function ($routeProvider, $mdThemingProvider) {
  $routeProvider
    //for now we will just redirect use to the login page.
    .when('/', {
      templateUrl : './app/templates/login.html',
      controller : 'loginCtrl'
    })
    .when('/login', {
      templateUrl : './app/templates/login.html',
      controller : 'loginCtrl'
    })
    .when('/register', {
      templateUrl : './app/templates/register.html',
      controller : 'registerCtrl'
    })
    .when('/browse', {
      templateUrl : './app/templates/browse.html',
      controller : 'browseCtrl'
    })
    .when('/dashboard', {
      templateUrl : './app/templates/dashboard.html',
      controller: 'dashboardCtrl'
    })
    .when('/profile', {
      templateUrl : './app/templates/profile.html',
      controller : 'profileCtrl'
    })
    .when('/voting', {
      templateUrl : './app/templates/voting.html',
      controller : 'votingCtrl'
    });

    $mdThemingProvider.theme('default')
    .primaryPalette('orange')
    .accentPalette('grey');

});
