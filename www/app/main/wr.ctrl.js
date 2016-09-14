(function(){
  'use strict';
  angular.module('app')
    .controller('WrCtrl', WrCtrl);

  function WrCtrl($scope, $stateParams, Storage, Backend){
    var data = {}, fn = {};
    $scope.data = data;
    $scope.fn = fn;
    $scope.orderByField = 'Salary';
    $scope.reverseSort = true;
    
      Storage.getWr().then(function(wr){
        $scope.data.wr = wr;
        Backend.getWr().then(function(wr){
          $scope.data.wr = wr;
  })
  })
   } 
})();
