(function(){
  'use strict';
  angular.module('app')
    .controller('TeCtrl', TeCtrl);

  function TeCtrl($scope, $stateParams, Storage){
    var data = {}, fn = {};
    $scope.data = data;
    $scope.fn = fn;

    Storage.getTe($stateParams.id).then(function(te){
      data.te = te;
    });
  }
})();
