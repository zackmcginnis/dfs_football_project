(function(){
  'use strict';
  angular.module('app')
    .controller('SettingsCtrl', SettingsCtrl);

  function SettingsCtrl($scope, Storage, UiUtils, resolvedSettings, Backend){
    var fn = {}, data = {};
    $scope.fn = fn;
    $scope.data = data;

    data.settings = resolvedSettings;

    var positionUrls = [
    "/nfl/draftkings-cheatsheet.php?position=QB&export=xls",
    "/nfl/draftkings-cheatsheet.php?position=RB&export=xls",
    "/nfl/draftkings-cheatsheet.php?position=WR&export=xls",
    "/nfl/draftkings-cheatsheet.php?position=TE&export=xls",
    "/nfl/draftkings-cheatsheet.php?position=DST&export=xls"
    ]

    $scope.getdata = function (){
      for (var i=0; i < positionUrls.length; i++){
      Backend.scrape(positionUrls[i]);
    };
    };

    $scope.$watch('data.settings', function(settings, oldSettings){
      if(settings && oldSettings && !angular.equals(settings, oldSettings)){
        Storage.setUserSettings(settings).then(function(){
          UiUtils.showToast('saved settings');
        });
      }
    }, true);
  }
})();
