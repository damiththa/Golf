(function () {
    "use strict";   
    var FireBaseFactory = function ($http, $firebaseObject, $firebaseArray) { 
        return {
            getNowHandicap: function(FireBase_secret){
                var ref = new Firebase(FireBase_secret.url);                
                var HandicapNow = $firebaseObject(ref.child('Handicap').child('HandicapIs'));                
                return HandicapNow;                                
            },
            updateHandicap: function(FireBase_secret, newHandicap){
                var ref = new Firebase(FireBase_secret.url + '/Handicap');                
                // console.log(newHandicap); 
                $firebaseObject(ref.child('HandicapIs')).$save(newHandicap);
            }
        };
    };
    
    FireBaseFactory.$inject = ['$http', '$firebaseObject', '$firebaseArray'];
    
    angular.module('appGolf')
	  .service('FireBaseFactory', FireBaseFactory);
    
}());