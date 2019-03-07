"use strict";

var testApp = angular.module('testApp', [
    'ui.router',
    'ngStorage',
    'toastr',
    'ngMessages',
    '720kb.datepicker'
])
.config([ '$stateProvider', '$locationProvider', '$urlRouterProvider',
    function( $stateProvider, $locationProvider, $urlRouterProvider) {

    // use the HTML5 History API
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/login');

    $stateProvider
        .state('login', {
            url: '/login',
            views: {
                'content': {
                    templateUrl: 'modules/authentication/views/login.html',
                    controller: "loginController"
                }
            }
        })
        .state('signup', {
            url: '/signup',
            views: {
                'content': {
                    templateUrl: 'modules/authentication/views/signup.html',
                    controller: "loginController"
                }
            }
        })
        .state('dashboard', {
            url: '/dashboard/:username',
            views: {
                'content': {
                    templateUrl: 'modules/dashboard/views/dashboard.html',
                    controller: "dashboardController"
                }
            }
        })
    }])
.controller('appCtrl',['$scope','toastr','$localStorage','$state',function($scope,toastr,$localStorage,$state){

}]);
