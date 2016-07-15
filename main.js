var mainApp = angular.module('mainApp', ['ngSanitize']);

mainApp.controller('mainController', function($scope, $http) {
   
    $scope.project = project;
});


angular.module('mainApp')
    .filter('to_trusted', ['$sce', function($sce){
        return function(text) {
            return $sce.trustAsHtml(text);
        };
    }]); 
