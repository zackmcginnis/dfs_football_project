  'use strict';
  angular.module('app')
	.factory('scraperService', function ($http, Backend) {



	var scraperService = {};



		scraperService.convert = function (xlsfile) {//convert each xls file to csv
			//convert xls to json?

		};

		scraperService.save = function (csvfile) {//save csv file to disk
			//save in data folder as json?

		};


	return scraperService;
	});

	//"/nfl/draftkings-cheatsheet.php?position=DST&export=csv"