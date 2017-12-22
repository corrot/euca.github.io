app.factory('mediaCoverage', ['$http', function($http) {
    return $http.get('db/mediaCoverage.json')
        .success(function(data) {
            return data.mediaCoverage;
        })
        .error(function(data) {
            return data;
        });
}]);