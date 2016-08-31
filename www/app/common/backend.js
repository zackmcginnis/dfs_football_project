(function(){
  'use strict';
  angular.module('app')
    .factory('Backend', Backend);

  function Backend($http, Storage, C){
    return {
      getMain: getMain
    };

    function getMain(){
      return $http.get(C.backendUrl+'/positions.json').then(function(res){
        return Storage.setMain(res.data).then(function(){
          return res.data;
        });
      });
    }
  }
})();
