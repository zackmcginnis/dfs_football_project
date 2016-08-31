(function(){
  'use strict';
  angular.module('app')
    .controller('MainCtrl', MainCtrl);

  function MainCtrl($scope, Storage, Backend){
    var data = {}, fn = {};
    $scope.data = data;
    $scope.fn = fn;

    $scope.$on('$ionicView.enter', function(){
      Storage.getMain().then(function(main){
        data.main = main;
        Backend.getMain().then(function(main){
          data.main = main;
        });
      });
    });
  }
})();
