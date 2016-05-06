(function () {
    "use strict";
    var appGolf = angular.module('appGolf', ['ngRoute', 'firebase', 'chart.js']);
    
    appGolf.config(['$routeProvider', function($routeProvider){
		$routeProvider
            .when('/', {
                controller: 'MainController',
                templateUrl: 'Views/home.html'
            })            
            .otherwise({redirectTo: '/'});
	}]);
}());
