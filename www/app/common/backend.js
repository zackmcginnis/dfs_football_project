(function(){
  'use strict';
  angular.module('app')
    .factory('Backend', Backend);

  function Backend($http, Storage, C){
    return {
      getMain: getMain, //get DK csv
      csvToJson: csvToJson, //convert csv to javascript object
      addTeam: addTeam
    };

    function csvToJson(csv){
      //console.log("csv", csv);
      var lines=csv.data.split("\n");
      //console.log("lines", lines);
      lines.shift();
      var obj = [];
      //var headers=lines[0].split(",");
      //for(var i=1;i<lines.length;i++){
      angular.forEach(lines, function(val) {
      var o = val.split(',');
      obj.push({ //Position,Name,Salary,GameInfo,AvgPointsPerGame,teamAbbrev
        Position: o[0],
        Name: o[1],
        Salary: o[2],
        GameInfo: o[3],
        AvgPointsPerGame: o[4],
        teamAbbrev: o[5]
      });
       
      });

      return obj; //JavaScript object
      //return JSON.stringify(result); //JSON
    };

    function getMain(){ //from DK csv
      return $http.get(C.backendUrl+'/DKSalaries.csv').then(function(res){
        var all = csvToJson(res);
        console.log("all", all);
        return Storage.setMain(all).then(function(){
          return all;
        });
      });
    }

    function addTeam(list){
      //var teamAbbrev = "teamAbbrev";
      for (var i=0; i < list.length; i++){
        var member = {};
        var member = list[i];
        //var member.teamAbbrev = member[teamAbbrev]; // = list[i]."teamAbbrev";
        //console.log(member["teamAbbrev"]);
      }
      return list;
    };

  }
})();
