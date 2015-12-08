angular.module('like.service', []).factory('authService', ['$http', function($http){
  var login = function (userObj) {
   $http({
    method : 'post',
    url : '/api/login',
    data : userObj
   });
  }
  return {login: login};;
}]);