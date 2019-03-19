import angular from 'angular';
import Chart from 'chart.js';
import { UserService } from '../services/userService';
import { homeCtrl } from '../controllers/homeCtrl';
import { leaderboardCtrl } from '../controllers/leaderboardCtrl';
import { friendsCtrl } from '../controllers/friendsCtrl';

require("angular-route");

import '../style/app.scss';
import { ENOSYS } from 'constants';

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, ['ngRoute'])
  .service('UserService', UserService)
  .service('homeCtrl', homeCtrl)
  .service('leaderboardCtrl', leaderboardCtrl)
  .service('friendsCtrl', friendsCtrl)

  .controller('AppCtrl', ['$scope', 'UserService', 'homeCtrl', function ($scope, $UserService, $homeCtrl) {
    // Home page controller
     
  }])

  .controller('LeaderboardCtrl', ['$scope', 'UserService', 'leaderboardCtrl', function ($scope, $UserService, $leaderboardCtrl) {
    // Leaderboard controller
      
    $UserService.GetAll()
      .then(function (response) {
        $scope.users = response.data.results.map(user => { 
          user.steps = $leaderboardCtrl.randomInt(1000, 20000); 

          return user;
        });
      })
     

  }])

  .controller('FriendsCtrl', ['$scope', 'UserService', 'friendsCtrl', function ($scope, $UserService, $friendsCtrl) {
    // Friends controller

    let i = 0;
     
    $UserService.GetAll()
      .then(function (response) { 
        $scope.users = response.data.results.map(user => {
          user.index = (i = i + 1);
          user.steps = $friendsCtrl.randomInt(1000, 20000);
          user.ranking = $friendsCtrl.randomInt(1, 10);
          user.friends = $friendsCtrl.randomInt(1000, 20000);
          user.isDisabled = false;

          return user;
        });
      })

    $scope.sendRequest = function (user) {
      user.isDisabled = true; 
    } 

  }])
  
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        template: require('./home.html'),
        controller: 'AppCtrl'
      })
      .when('/leaderboard', {
        template: require('./leaderboard.html'),
        controller: 'LeaderboardCtrl'
      })
      .when('/friends', {
        template: require('./friends.html'),
        controller: 'FriendsCtrl'
      })
    $locationProvider.hashPrefix('');
  });

export default MODULE_NAME;
