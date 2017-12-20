app.controller('HomeController', ['$scope', 'news', 'sliderData', function($scope, news, sliderData) {
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
}]);