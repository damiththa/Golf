(function () {
    "use strict";   
    var AirTableService = function ($http) { 
        return {
            getMyRounds: function(AirTable_secret){
                return $http.get(AirTable_secret.url+'&callback=JSON_CALLBACK', {
                    params: {
                        view: 'Main View',       
                        // maxRecords: 10,
                        sort: [{"field": 'Score', "direction":'asc'}]                        
                    },
                    paramSerializer: '$httpParamSerializerJQLike',                    
                    headers : {
                        'Authorization' : AirTable_secret.apikey,
                        'Content-Type' : 'application/json'
                    }
                });
            }
        };
    };
    
    AirTableService.$inject = ['$http'];
    
    angular.module('appGolf')
	  .service('AirTableService', AirTableService);
    
}());