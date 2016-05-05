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
                $scope.HandicapCalc = HandicapFactory.CalcHandicap($scope.myRounds.data.records);
                console.log($scope.HandicapCalc);
                
                //Getting current Handicap
                $scope.HandicapNow = FireBaseFactory.getNowHandicap($scope.FireBase_Secrets); 
                $scope.HandicapNow.$loaded().then(function(){
                    console.log($scope.HandicapNow.$value); 
                    // console.log(angular.equals($scope.HandicapCalc,$scope.HandicapNow.$value));
                    if(!angular.equals($scope.HandicapCalc,$scope.HandicapNow.$value)){
                        //Update FireBase
                        FireBaseFactory.updateHandicap($scope.FireBase_Secrets, $scope.HandicapCalc);
                    }
                });
                
            });
            
        }).catch(function(){
           console.log('error loading secrets'); 
        });
    };
    
    MainController.$inject = ['$scope', 'SecretsService', 'AirTableService', 'HandicapFactory', 'FireBaseFactory'];
    
    angular.module('appGolf')
        .controller('MainController', MainController);    
}());