(function () {
    "use strict";   
    var SecretsService = function ($http) {
        var SecretsMethods = {
            getKeys: function(){
                var AA = 'FFFF';
                return AA;
            }
        };
        return SecretsMethods;
    };
    
    SecretsService.$inject = ['$http'];
        
    angular.module('appGolf')
	  .service('SecretsService', SecretsService);    
}());