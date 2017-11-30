app.factory('news', ['$http', function($http) {
    return $http.get('db/data.json')
        .success(function(data) {
            return data.news;
        })
        .error(function(data) {
            return data;
        });
}]);