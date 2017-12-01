app.controller('NewsController', ['$scope', 'news', '$routeParams', function($scope, news, $routeParams) {
    news.success(function(data) {
        $scope.news = data[$routeParams.id];
        // $scope.currentImageIndex = 0;
        // $scope.prevImage = function(album) {
        //     $scope.currentImageIndex -= 1;
        //     if ($scope.currentImageIndex <= -1) {
        //         $scope.currentImageIndex = 0;
        //     }
        // }
        // $scope.nextImage = function(album) {
        //     $scope.currentImageIndex += 1;
        //     if ($scope.currentImageIndex >= album.images.length) {
        //         $scope.currentImageIndex = album.images.length - 1;
        //     }
        // }
    });
}]);