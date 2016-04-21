'use strict'

// controls header info 
angular.module('patchUp')

.controller('mainCtrl', function ($scope) {
  $scope.message = 'I am here.';

$scope.games = [
  { name: 'LoL'},
  { name: 'SC2'},
  { name: 'GW2'}
  ]

});
