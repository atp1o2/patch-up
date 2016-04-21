'use strict';

angular.module('patchUp', [
  'ui.router',
  'ui.bootstrap'
])

.config(function ($stateProvider, $urlRouterProvider) {

  // $urlRouterProvider.otherwise(function ($injector, $location) {
  //   var $state = $injector.get('$state');
  //   $state.go('Main');
  // });

  $stateProvider
    .state('Main', {
      url: '/Main',
      templateUrl: 'views/mainView.html',
      controller: 'mainCtrl'
    })
    .state('Main.Select', {
      url: '/Select',
      templateUrl: 'views/selectView.html',
      controller: 'selectCtrl'
    })
    .state('Main.Feed', {
      url: '/Feed',
      templateUrl: 'views/feedView.html',
      controller: 'feedCtrl'
    })
    .state('Main.Update', {
      url: '/Update/:id',
      templateUrl: 'views/updateView.html',
      controller: 'updateCtrl'
    })




});
