'use strict';

angular.module('glossariesApp')

.controller('EngRusController', ['$scope', '$routeParams', '$http', function($scope, $routeParams, $http) {
    var encoded = encodeURIComponent($routeParams.w);
    $http.
    get('http://127.0.0.1:3000/engrus/'+ encoded).
    success(function(data) {
      $scope.source = encoded;
      console.log(JSON.stringify(data));
      $scope.target = JSON.stringify(data);
    });
}]);