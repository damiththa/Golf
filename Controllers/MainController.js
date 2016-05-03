(function () {
    "use strict";
    var MainController = function ($scope, AirTableService, HandicapFactory, $rootScope){
        $scope.$on('secrets-loaded', function(){ //by listerning to broadcast, making sure secrets are loaded first
            $scope.keys = $rootScope.secrets.urls;
            // console.log($scope.keys);
            
            var myRounds_PromiseReturn = AirTableService.getMyRounds($scope.keys.AirTable);
            myRounds_PromiseReturn.then(function (data){
                $scope.myRounds = data;
                // console.log($scope.myRounds.data.records);
                $scope.myHandicap = HandicapFactory.CalcHandicap($scope.myRounds.data.records);
                console.log($scope.myHandicap);
            })
        }); 
    }
    MainController.$inject = ['$scope', 'AirTableService', 'HandicapFactory', '$rootScope'];
    
    angular.module('appGolf')
        .controller('MainController', MainController);
}());