(function () {
    "use strict";   
    var FireBaseFactory = function ($http, $firebaseObject, $firebaseArray) { 
        var todayIs = moment().format("MM/DD/YYYY");
        return {
            getNowHandicap: function(FireBase_secret){
                var ref = new Firebase(FireBase_secret.url);                
                var HandicapNow = $firebaseObject(ref.child('CurrentHandicap').child('HandicapIs'));               
                return HandicapNow;                                
            },
            updateHandicap: function(FireBase_secret, newHandicap){
                var ref = new Firebase(FireBase_secret.url + '/CurrentHandicap');                
                console.log(newHandicap);                
                ref.update({HandicapIs: newHandicap, UpdateDate: todayIs});                
            },
            intoHandicapHistory: function(FireBase_secret, newHandicap){
                var ref = new Firebase(FireBase_secret.url + '/HandicapHistory');                
                $firebaseArray(ref).$add({HandicapWas: newHandicap, Date: todayIs});
            },
            getPastHandicaps: function(FireBase_secret){
                var ref = new Firebase(FireBase_secret.url); 
                var PastHandicaps = $firebaseObject(ref.child('HandicapHistory')); 
                return PastHandicaps;         
            } 
        };
    };
    
    FireBaseFactory.$inject = ['$http', '$firebaseObject', '$firebaseArray'];
    
    angular.module('appGolf')
	  .service('FireBaseFactory', FireBaseFactory);
    
}());