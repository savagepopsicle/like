(function () {
  'use strict';

  angular.module('like.profile', ['like.slideMenu', 'like.stat'])
  .controller('profileCtrl', ['$scope', '$http','dataService', '$location', '$mdSidenav', function ($scope, $http, dataService, $location, $mdSidenav) {

    $scope.targetUserId = sessionStorage.getItem('targetUserId');

    $scope.getUserData = function (userId) {
      dataService.getUserData(userId)
      .then(function (res) {
        $scope.firstName = res.data.firstName;
        $scope.lastName = res.data.lastName;
        $scope.vote = res.data.vote;
        $scope.allowToVote = res.data.isVoted;
      })
      .catch(function (res) {
        console.log('you already voted for this person!!!');
      });
    };

    $scope.switchView = function (location) {
      $location.path(location);
    };

    $scope.sendVote = function (voteArr) {
      var data = {
        userId: voteArr[0],
        trait: voteArr[1],
        vote: voteArr[2]
      };
      return $http({
        method: 'POST',
        url: '/api/vote/' + data.userId,
        data: data
      }).then(function (data) {
        $scope.data = data.data;
        return data.data;
      }).catch(function (data) {
        $scope.data = false;
        return false;
      });
    };

    if ($scope.targetUserId !== null) {
      $scope.getUserData(sessionStorage.getItem('targetUserId'));
    }
  }]); //close controller
})();
