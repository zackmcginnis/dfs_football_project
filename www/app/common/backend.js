(function(){
  'use strict';
  angular.module('app')
    .factory('Backend', Backend);

  function Backend($http, Storage, C){
    return {
      getMain: getMain, //get DK csv
      csvToJson: csvToJson, //convert csv to javascript object
      getQb: getQb,
      getWr: getWr,
      getRb: getRb,
      getTe: getTe,
      getDef: getDef
    };

    function csvToJson(csv){
      //console.log("csv", csv);
      var lines=csv.data.split("\n");
      //console.log("lines", lines);
      lines.shift();
      var obj = [];

      angular.forEach(lines, function(val) {
      var o = val.split('\t');
 
        obj.push({ //Player    Kickoff   Opponent    Spread    Over/Under    Predicted Score   Weather   Projected Rank    Salary Rank   Difference    Projected Points    Salary    CPP 
          "Player": o[0],
          "Kickoff": o[1],
          "Opponent": o[2],
          "Spread": o[3],
          "OverUnder": o[4],
          "PredictedScore": o[5],
          "Weather": o[6],
          "ProjectedRank": o[7],
          "SalaryRank": o[8],
          "Difference": o[9],
          "ProjectedPoints": o[10],
          "Salary": o[11],
          "CostPerPoint": o[12]
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

    function getQb(){ //from DK csv
      return $http.get(C.backendUrl+'/dkqb.csv').then(function(res){
        var qbs = csvToJson(res);
        console.log("qbs", qbs);
        return Storage.setQb(qbs).then(function(){
          return qbs;
        });
      });
    }

    function getWr(){ //from DK csv
      return $http.get(C.backendUrl+'/dkwr.csv').then(function(res){
        var all = csvToJson(res);
        console.log("all", all);
        return Storage.setWr(all).then(function(){
          return all;
        });
      });
    }

    function getRb(){ //from DK csv
      return $http.get(C.backendUrl+'/dkrb.csv').then(function(res){
        var all = csvToJson(res);
        console.log("all", all);
        return Storage.setRb(all).then(function(){
          return all;
        });
      });
    }

    function getTe(){ //from DK csv
      return $http.get(C.backendUrl+'/dkte.csv').then(function(res){
        var all = csvToJson(res);
        console.log("all", all);
        return Storage.setTe(all).then(function(){
          return all;
        });
      });
    }

    function getDef(){ //from DK csv
      return $http.get(C.backendUrl+'/dkdef.csv').then(function(res){
        var all = csvToJson(res);
        console.log("all", all);
        return Storage.setDef(all).then(function(){
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
