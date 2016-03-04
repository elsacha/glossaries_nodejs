'use strict';

angular.module('glossariesApp')

//.controller('EngRusController', ['$scope', '$routeParams', '$http', function($scope, $routeParams, $http) {
.controller('EngRusController', ['$scope', '$http', 'sourceService', function($scope, $http, sourceService) {
    //var encoded = encodeURIComponent($routeParams.w);
    
    $scope.srcTerm = sourceService.srcTerm;
    
    $scope.$watch('srcTerm', function() {
       sourceService.srcTerm = $scope.srcTerm; 
    });
    $http.
    get('http://localhost:3000/api/engrus/'+ $scope.srcTerm).
    success(function(data) {
      console.log(JSON.stringify(data));
      //$scope.target = JSON.stringify(data);
        $scope.target = data;
    });
}]);