var app = angular.module("springboothello",[]);

app.controller("AppCtrl", function($scope){
    $scope.websites = [];

/*    $http.get('http://localhost:8090/api/stackoverflow').success(function(data) {
        $scope.websites = data;
    });*/

    $http.get('http://localhost:8090/api/stackoverflow').then(function (response) { $scope.websites=response.data; });
});