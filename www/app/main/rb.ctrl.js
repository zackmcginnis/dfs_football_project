(function(){
  'use strict';
  angular.module('app')
    .controller('RbCtrl', RbCtrl);

  function RbCtrl($scope, $stateParams, Storage, Backend){
    var data = {}, fn = {};
    $scope.data = data;
    $scope.fn = fn;
    $scope.orderByField = 'Salary';
    $scope.reverseSort = true;
    
      Storage.getRb().then(function(rb){
        $scope.data.rb = rb;
        Backend.getRb().then(function(rb){
          $scope.data.rb = rb;
  })
  })
   } 
})();
