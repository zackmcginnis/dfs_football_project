(function(){
  'use strict';
  angular.module('app')
    .controller('WrCtrl', WrCtrl);

  function WrCtrl($scope, $stateParams, Storage){
    var data = {}, fn = {};
    $scope.data = data;
    $scope.fn = fn;

    Storage.getWr($stateParams.id).then(function(wr){
      data.wr = wr;
    });
  }
})();
