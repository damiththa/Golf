(function () {
    "use strict";
    var appGolf = angular.module('appGolf', ['ngRoute', 'firebase', 'chart.js']);
    
    appGolf.config(['$routeProvider', function($routeProvider){
		$routeProvider
            .when('/', {
                controller: 'MainController',
                templateUrl: 'Views/home.html'
            })
            .when('/rounds', {
                templateUrl: 'Views/rounds.html'
            }) 
            .when('/courses', {
                templateUrl: 'Views/courses.html'
            }) 
            .when('/about', {
                templateUrl: 'Views/about.html'
            })            
            .otherwise({redirectTo: '/'});
	}]);
}());
