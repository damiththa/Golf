// (function () {
//     "use strict";
//     var FireBaseFactory = function ($http, $firebaseArray) {
//         var factory_FireBase = {};
//         var ref = new Firebase('https://iot-septa.firebaseio.com');
//         var events = $firebaseArray(ref);
        
//         factory_FireBase.intoFireBase = function(ThisTrain){
// //            console.log(ThisTrain);
//             return events.$add(ThisTrain);
//         };
        
//         return factory_FireBase;        
//     };
        
//     FireBaseFactory.$inject = ['$http', '$firebaseArray'];
    
//     angular.module('appSepta')
//         .factory('FireBaseFactory', FireBaseFactory);    
// }());

(function () {
    "use strict";   
    var FireBaseFactory = function ($http, $firebaseObject, $firebaseArray) { 
        return {
            intoFireBase: function(FireBase_secret, ThisHandicap){
                var ref = new Firebase(FireBase_secret.url);
                
                var AA = $firebaseObject(ref.child('Handicap').child('HandicapIs'))
                
                // var ZZ = $firebaseArray(ref);
                // // ZZ.$add({HandicapIs: '60.0', UpdateDate: '06/02/2013'});
                
                // var XX = ZZ.$indexFor('KGwWBFYLS4mpsJYUypN');
                // console.log(XX);
                
                
                // var AA = $firebaseArray(ref);
                // console.log(AA);
                
                return AA;
            }
        };
    };
    
    FireBaseFactory.$inject = ['$http', '$firebaseObject', '$firebaseArray'];
    
    angular.module('appGolf')
	  .service('FireBaseFactory', FireBaseFactory);
    
}());