// (function () {
//     "use strict";
//     var MainController = function ($scope, AirTableService, HandicapFactory, $rootScope){
//         $scope.$on('secrets-loaded', function(){ //by listerning to broadcast, making sure secrets are loaded first
//             $scope.keys = $rootScope.secrets.urls;
//             // console.log($scope.keys);
            
//             var myRounds_PromiseReturn = AirTableService.getMyRounds($scope.keys.AirTable);
//             myRounds_PromiseReturn.then(function (data){
//                 $scope.myRounds = data;
//                 console.log($scope.myRounds.data.records);
//                 $scope.myHandicap = HandicapFactory.CalcHandicap($scope.myRounds.data.records);
//                 console.log($scope.myHandicap);
//             })
//         }); 
//     }
//     MainController.$inject = ['$scope', 'AirTableService', 'HandicapFactory', '$rootScope'];
    
//     angular.module('appGolf')
//         .controller('MainController', MainController);
// }());

(function () {
    "use strict";
    var MainController = function ($scope, SecretsService, AirTableService, HandicapFactory, FireBaseFactory) {    
        var Secret_Retrun = SecretsService.getKeys();
        Secret_Retrun.then(function(data){
            $scope.Secrets = data;
            $scope.AirTable_Secrets = $scope.Secrets.data.urls.AirTable;
            $scope.FireBase_Secrets = $scope.Secrets.data.urls.FireBase;
            // console.log(AirTable_Secrets);
            
            var myRounds_PromiseReturn = AirTableService.getMyRounds($scope.AirTable_Secrets);           
            myRounds_PromiseReturn.then(function (data){
                $scope.myRounds = data;
                // console.log($scope.myRounds.data.records);
                $scope.myHandicap = HandicapFactory.CalcHandicap($scope.myRounds.data.records);
                // console.log($scope.myHandicap);
                $scope.APA = FireBaseFactory.intoFireBase($scope.FireBase_Secrets, $scope.myHandicap); //Into FireBase 
            });
            
        }).catch(function(){
           console.log('error loading secrets'); 
        });
    };
    
    MainController.$inject = ['$scope', 'SecretsService', 'AirTableService', 'HandicapFactory', 'FireBaseFactory'];
    
    angular.module('appGolf')
        .controller('MainController', MainController);    
}());