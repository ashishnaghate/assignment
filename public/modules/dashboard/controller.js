"use strict";

testApp.controller('dashboardController', ['$scope','$stateParams',
    function($scope, $stateParams) {

        $scope.username = $stateParams.username;
    }
]);