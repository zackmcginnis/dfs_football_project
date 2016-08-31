(function(){
  'use strict';
  angular.module('app')
    .controller('QbCtrl', QbCtrl);

  function QbCtrl($scope, $stateParams, Storage){
    var data = {}, fn = {};
    $scope.data = data;
    $scope.fn = fn;

    Storage.getQb($stateParams.id).then(function(qb){
      data.qb = qb;
    });
  }
})();
