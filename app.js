(function () {
    "use strict";
    var appGolf = angular.module('appGolf', ['firebase']);
    
    appGolf.run(function($http, $rootScope){
        $http.get('Secrets/secretKeys.json').
        success(function(data, status, headers, config) {
            //alert('config'+ data.name);
            $rootScope.secrets = data;
            $rootScope.$broadcast('secrets-loaded');
        }).
        error(function(data, status, headers, config) {
            // log error
            alert('error');
        });
    })
}());