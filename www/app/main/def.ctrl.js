(function(){
  'use strict';
  angular.module('app')
    .controller('DefCtrl', DefCtrl);

  function DefCtrl($scope, $stateParams, Storage){
    var data = {}, fn = {};
    $scope.data = data;
    $scope.fn = fn;

    Storage.getDef($stateParams.id).then(function(def){
      data.def = def;
    });
  }
})();
