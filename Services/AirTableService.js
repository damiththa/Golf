(function () {
    "use strict";   
    var AirTableService = function ($scope, $http, $q) {   
        var AirTableMethods = {
            getMyRounds: function(){
                var deferObject_myRounds;
                var myRounds_promise = $http.get(AirTable_secret.url+'callback=JSON_CALLBACK', {
                    params: {
                        view: 'Main View',       
                        maxRecords: 10,
                        sort: [{"field": 'Score', "direction":'asc'}]                        
                    },
                    paramSerializer: '$httpParamSerializerJQLike',                    
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
    
    AirTableService.$inject = ['$scope', '$http', '$q'];
    
    angular.module('appGolf')
	  .service('AirTableService', AirTableService);
    
}());