app.controller('SliderDataController', ['$scope', 'sliderData', '$routeParams', function($scope, sliderData, $routeParams) {
    sliderData.success(function(data) {
        $scope.sliderData = data;
    });
}]);