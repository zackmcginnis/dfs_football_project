(function(){
  'use strict';
  angular.module('app')
    .controller('RbCtrl', RbCtrl);

  function RbCtrl($scope, $stateParams, Storage, Backend){
    var data = {}, fn = {};
    $scope.data = data;
    $scope.fn = fn;

      Storage.getRb().then(function(rb){
        $scope.data.rb = rb;
        Backend.getRb().then(function(rb){
          $scope.data.rb = rb;
  })
  })
   } 
})();
