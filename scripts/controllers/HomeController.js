app.controller('HomeController', ['$scope', 'news', 'sliderData', 'mediaCoverage', function($scope, news, sliderData, mediaCoverage) {
    news.success(function(data) {
        $scope.news = data;
    });
    sliderData.success(function(data) {
        $scope.sliderData = data;
        $scope.slickConfig = {
            autoplay: true,
            autoplaySpeed: 2000,
        }
    });
    mediaCoverage.success(function(data) {
        $scope.mediaCoverage = data;
        $scope.coverageLimit = 4;
        $scope.loadCoverage = function() {
            $scope.coverageLimit += 4;
        }
    });
}]);