app.factory('sliderData', ['$http', function($http) {
    return $http.get('db/sliderData.json')
        .success(function(data) {
            return data.sliderData;
        })
        .error(function(data) {
            return data;
        });
}]);