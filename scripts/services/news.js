app.factory('news', ['$http', function($http) {
    return $http.get('db/news.json')
        .success(function(data) {
            return data.news;
        })
        .error(function(data) {
            return data;
        });
}]);