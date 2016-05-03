(function () {
    "use strict";   
    var AirTableService = function ($http, $q) {
        var AirTableMethods = {
            getMyRounds: function(AirTable_secret){
                var deferObject_myRounds;
                var myRounds_promise = $http.get(AirTable_secret.url+'&callback=JSON_CALLBACK', {
                    headers : {
                        'Authorization' : AirTable_secret.apikey,
                        'Content-Type' : 'application/json'
                    }
                });
                deferObject_myRounds = deferObject_myRounds || $q.defer();
                
                myRounds_promise.then(function(data){
                    deferObject_myRounds.resolve(data);
                });                
                return deferObject_myRounds.promise;
            }
        };
        return AirTableMethods;
    };
    
    AirTableService.$inject = ['$http', '$q'];
    
    angular.module('appGolf')
	  .service('AirTableService', AirTableService);
    
}());