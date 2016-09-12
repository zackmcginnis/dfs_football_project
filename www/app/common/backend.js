(function(){
  'use strict';
  angular.module('app')
    .factory('Backend', Backend);

  function Backend($http, Storage, C){
    return {
      csvToJson: csvToJson, //convert csv to javascript object
      getQb: getQb,
      getWr: getWr,
      getRb: getRb,
      getTe: getTe,
      getDef: getDef,
      getZacksQbProjection: getZacksQbProjection,
      getZacksRbProjection: getZacksRbProjection,
      getZacksWrProjection: getZacksWrProjection,
      getZacksTeProjection: getZacksTeProjection,
      getZacksDefProjection: getZacksDefProjection
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

    function getQb(){ //from DK csv
      return $http.get(C.backendUrl+'/dkqb.csv').then(function(res){
        var all = csvToJson(res);
        var predict;
        for (var i=0; i < all.length; i++){
          all[i].Position = "QB";
          predict = all[i].PredictedScore;
          if (predict !== undefined)
          predict = predict.replace(/0|1|2|3|4|5|6|7|8|9| /g, "");
          all[i].Team = predict;
          all[i].ZacksProjection = getZacksQbProjection(all[i]);
        }
        console.log("qbs", all);
        return Storage.setQb(all).then(function(){
          return all;
        });
      });
    }

    function getWr(){ //from DK csv
      return $http.get(C.backendUrl+'/dkwr.csv').then(function(res){
        var all = csvToJson(res);
        var predict;
        for (var i=0; i < all.length; i++){
          all[i].Position = "WR";
          predict = all[i].PredictedScore;
          if (predict !== undefined)
          predict = predict.replace(/0|1|2|3|4|5|6|7|8|9| /g, "");
          all[i].Team = predict;
          all[i].ZacksProjection = getZacksWrProjection(all[i]);
        }
        console.log("wr", all);
        return Storage.setWr(all).then(function(){
          return all;
        });
      });
    }

    function getRb(){ //from DK csv
      return $http.get(C.backendUrl+'/dkrb.csv').then(function(res){
        var all = csvToJson(res);
        var predict;
        for (var i=0; i < all.length; i++){
          all[i].Position = "RB";
          predict = all[i].PredictedScore;
          if (predict !== undefined)
          predict = predict.replace(/0|1|2|3|4|5|6|7|8|9| /g, "");
          all[i].Team = predict;
          all[i].ZacksProjection = getZacksRbProjection(all[i]);
        }
        console.log("rb", all);
        return Storage.setRb(all).then(function(){
          return all;
        });
      });
    }

    function getTe(){ //from DK csv
      return $http.get(C.backendUrl+'/dkte.csv').then(function(res){
        var all = csvToJson(res);
        var predict;
        for (var i=0; i < all.length; i++){
          all[i].Position = "TE";
          predict = all[i].PredictedScore;
          if (predict !== undefined)
          predict = predict.replace(/0|1|2|3|4|5|6|7|8|9| /g, "");
          all[i].Team = predict;
          all[i].ZacksProjection = getZacksTeProjection(all[i]);
        }        
        console.log("te", all);
        return Storage.setTe(all).then(function(){
          return all;
        });
      });
    }

    function getDef(){ //from DK csv
      return $http.get(C.backendUrl+'/dkdef.csv').then(function(res){
        var all = csvToJson(res);
        var predict;
        for (var i=0; i < all.length; i++){
          all[i].Position = "DEF";
          predict = all[i].PredictedScore;
          if (predict !== undefined)
          predict = predict.replace(/0|1|2|3|4|5|6|7|8|9| /g, "");
          all[i].Team = predict;
          all[i].ZacksProjection = getZacksDefProjection(all[i]);
        }
        console.log("def", all);
        return Storage.setDef(all).then(function(){
          return all;
        });
      });
    }

    function getZacksQbProjection(player){
      if (player){
      }
      var zacksprojection = 0;
      return zacksprojection;
    };

    function getZacksRbProjection(player){
      if (player){
      }
      var zacksprojection = 0;
      return zacksprojection;
    };

    function getZacksWrProjection(player){
      if (player){
      }
      var zacksprojection = 0;
      return zacksprojection;
    };

    function getZacksTeProjection(player){
      if (player){
      }
      var zacksprojection = 0;
      return zacksprojection;
    };

    function getZacksDefProjection(player){
      if (player){
      }
      var zacksprojection = 0;
      return zacksprojection;
    };

  }
})();
