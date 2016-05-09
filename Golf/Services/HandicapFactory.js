(function () {
    "use strict";
    var HandicapFactory = function () {
        
        var factory = {};

        factory.DifferentialsToUse = function(TotalRounds){
            var DiffsToUse = 0;
            if(TotalRounds < 6){
                DiffsToUse = 1;
            }else if(TotalRounds < 8){
                DiffsToUse = 2;
            }else if(TotalRounds < 10){
                DiffsToUse = 3;
            }else if(TotalRounds < 12){
                DiffsToUse = 4;
            }else if(TotalRounds < 14){
                DiffsToUse = 5;
            }else if(TotalRounds < 16){
                DiffsToUse = 6;
            }else if(TotalRounds < 17){
                DiffsToUse = 7;
            }else if(TotalRounds < 18){
                DiffsToUse = 8;
            }else if(TotalRounds < 19){
                DiffsToUse = 9;
            }else{
                DiffsToUse = 10;
            }            
            return DiffsToUse;
        },
        factory.CalcHandicap = function (myrounds) {
            //Getting Number of Differentials according to number of rounds
            var Diffs = factory.DifferentialsToUse(myrounds.length);                                    
            var ttl = 0;
            for(var i=0; i<Diffs; i++){
                // console.log(Math.ceil(myrounds[i].fields.HandicapDifferential * 100)/100);
                ttl += Math.ceil(myrounds[i].fields.HandicapDifferential * 100)/100;
            };            
            var HandicapIndex = (ttl/Diffs)*0.96;            
            return Math.round(HandicapIndex * 10)/10;
        }
        return factory;
    };  
    
    HandicapFactory.$inject = [];
    
    angular.module('appGolf')
        .factory('HandicapFactory', HandicapFactory);
    
}());