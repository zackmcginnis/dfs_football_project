(function(){
  'use strict';
  angular.module('app')
    .factory('Backend', Backend);

  function Backend($http, Storage, C){
    return {
      getMain: getMain,
      csvToJson: csvToJson
    };

    function csvToJson(csv){
      //console.log("csv", csv);
      var lines=csv.data.split("\n");
      //console.log("lines", lines);
      var result = [];
      var headers=lines[0].split(",");
      for(var i=1;i<lines.length;i++){

        var obj = {};
        var currentline=lines[i].split(",");

        for(var j=0;j<headers.length;j++){
          obj[headers[j]] = currentline[j];
        }
        result.push(obj);
      }

      return result; //JavaScript object
      //return JSON.stringify(result); //JSON
    };

    function getMain(){
      return $http.get(C.backendUrl+'/DKSalaries.csv').then(function(res){
        var all = csvToJson(res);
        console.log("all", all);
        return Storage.setMain(all).then(function(){
          return all;
        });
      });
    }
  }
})();
