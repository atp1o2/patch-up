'use strict';

angular.module('patchUp', [
  'ui.router'
])

.config(function ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise(function ($injector, $location) {
    var $state = $injector.get('$state');
    $state.go('home');
  });

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'views/home.html',
      controller: 'homeCtrl'
    })

    .state('game', {
      url: '/game',
      templateUrl: 'views/gameView.html',
      controller: 'homeCtrl'
    })



});
