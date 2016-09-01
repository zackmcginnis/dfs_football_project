(function(){
  'use strict';
  angular.module('app')
    .controller('AllCtrl', AllCtrl);

  function AllCtrl($scope, $stateParams, Storage, Backend){
    var data = {}, fn = {};
    $scope.data = data;
    $scope.fn = fn;


      Storage.getMain().then(function(main){
        $scope.data.main = main;
        Backend.getMain().then(function(main){
          $scope.data.main = main;
          //console.log("getmain", data.main);
        });
      });

    //Storage.getAll($stateParams.id).then(function(all){
     // $scope.data.all = all;
      //console.log("show all", all);
    //});
  }
})();
