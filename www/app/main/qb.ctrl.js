(function(){
  'use strict';
  angular.module('app')
    .controller('QbCtrl', QbCtrl);

  function QbCtrl($scope, $stateParams, Storage, Backend){
    var data = {}, fn = {};
    $scope.data = data;
    $scope.fn = fn;

      Storage.getQb().then(function(qb){
        $scope.data.qb = qb;
        Backend.getQb().then(function(qb){
          $scope.data.qb = qb;
          //$scope.data.main = Backend.addTeam($scope.data.main);

  })
  })
   } 
})();
