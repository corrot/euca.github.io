app.controller('HomeController', ['$scope', 'news', function($scope, news) {
    news.success(function(data) {
        $scope.news = data;

        // $scope.selectImage = function(i, j) {
        //     $scope.selectedImage = $scope.albums[i].images[j].url;
        // }
    });
}]);