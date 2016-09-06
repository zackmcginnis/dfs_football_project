(function(){
  'use strict';
  angular.module('app')
    .controller('DefCtrl', DefCtrl);

  function DefCtrl($scope, $stateParams, Storage, Backend){
    var data = {}, fn = {};
    $scope.data = data;
    $scope.fn = fn;

      Storage.getDef().then(function(def){
        $scope.data.def = def;
        Backend.getDef().then(function(def){
          $scope.data.def = def;
  })
  })
   } 
})();
