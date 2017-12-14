app.controller('NewsController', ['$scope', 'news', '$routeParams', function($scope, news, $routeParams) {
    news.success(function(data) {
        $scope.news = data[$routeParams.id];
    });
}]);