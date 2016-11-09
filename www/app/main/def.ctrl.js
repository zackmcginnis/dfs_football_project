(function(){
  'use strict';
  angular.module('app')
    .controller('DefCtrl', DefCtrl);

  function DefCtrl($scope, $stateParams, Storage, Backend){
    var data = {}, fn = {};
    $scope.data = data;
    $scope.fn = fn;
    //$scope.orderByField = 'Salary';
    //$scope.reverseSort = true;

    $scope.options = {
      rowHeight: 25,
      headerHeight: 25,
      footerHeight: false,
      columns: [{
        name: "Player",
        prop: "Player",
        width: 130,
        frozenLeft: true
      }, {
        name: "Opponent",
        prop: "Opponent",
        width: 100
      }, {
        name: "Spread",
        prop: "Spread",
        width: 100
      }, {
        name: "Over/Under",
        prop: "OverUnder",
        width: 100
      }, {
        name: "Projected Rank",
        prop: "ProjectedRank",
        width: 120
      }, {
        name: "Salary Rank",
        prop: "SalaryRank",
        width: 100
      }, {
        name: "Difference",
        prop: "Difference",
        width: 100
      }, {
        name: "Salary",
        prop: "Salary",
        width: 100
      }, {
        name: "Cost Per Point",
        prop: "CostPerPoint",
        width: 120
      }, {
        name: "Projected Points",
        prop: "ProjectedPoints",
        width: 120
      }, {
        name: "Zack's Projection",
        prop: "ZacksProjection",
        width: 130
      }]
  };
 
  $scope.isPinned = function() {
    var gcol = $scope.options.columns.find(function(c) {
      return c.prop === 'Player';
    })
    return gcol.frozenLeft;
  };
  $scope.togglePin = function() {
    var gcol = $scope.options.columns.find(function(c) {
      return c.prop === 'Player';
    })

    gcol.frozenLeft = !gcol.frozenLeft;
    console.log('toggled pin', gcol)
  };

      Storage.getDef().then(function(def){
        $scope.data.def = def;
        Backend.getDef().then(function(def){
          $scope.data.def = def;
  })
  })
   } 
})();
