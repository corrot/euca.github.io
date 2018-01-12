var app = angular.module('app');

app.controller('MediaCoverageController', ['$scope', 'mediaCoverage', '$routeParams', function($scope, mediaCoverage, $routeParams) {
    mediaCoverage.success(function(data) {
        $scope.mediaCoverage = data;
    });
}]);