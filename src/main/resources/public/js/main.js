var app = angular.module("springboothello",[]);

app.controller("AppCtrl", function($scope){
    $scope.websites = [{
        iconImageUrl: '',
        id: 'stackoverflow',
        website: 'stackoverflow.com',
        title: 'stackowerflow website',
        description: 'stackowerflow description'
    }];
});