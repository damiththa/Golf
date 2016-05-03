(function () {
    "use strict";
    var HandicapFactory = function () {
        
        var factory = {};

        factory.CalcHandicap = function (myrounds) {
            // console.log(myrounds);                           
            var ttl = 0;
            var RoundsCnt = myrounds.length;
            for(var i=0; i<RoundsCnt;i++){
                // console.log(Math.ceil(myrounds[i].fields.HandicapDifferential * 100)/100);
                ttl += Math.ceil(myrounds[i].fields.HandicapDifferential * 100)/100;
            };
            
            var HandicapIndex = (ttl/RoundsCnt)*0.96;            
            return Math.round(HandicapIndex * 10)/10
        };
        return factory;
    };  
    
    HandicapFactory.$inject = [];
    
    angular.module('appGolf')
        .factory('HandicapFactory', HandicapFactory);
    
}());