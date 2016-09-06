(function(){
  'use strict';
  angular.module('app')
    .controller('TeCtrl', TeCtrl);

  function TeCtrl($scope, $stateParams, Storage, Backend){
    var data = {}, fn = {};
    $scope.data = data;
    $scope.fn = fn;

      Storage.getTe().then(function(te){
        $scope.data.te = te;
        Backend.getTe().then(function(te){
          $scope.data.te = te;
  })
  })
   } 
})();
