(function(){
  'use strict';
  angular.module('app')
    .controller('RbCtrl', RbCtrl);

  function RbCtrl($scope, $stateParams, Storage){
    var data = {}, fn = {};
    $scope.data = data;
    $scope.fn = fn;

    Storage.getRb($stateParams.id).then(function(rb){
      data.rb = rb;
    });
  }
})();
