"use strict";

testApp.controller('loginController', ['$scope', '$rootScope', '$state', '$localStorage', 'toastr', '$filter', '$http',
    function ($scope, $rootScope, $state, $localStorage, toastr, $filter, $http) {

        $scope.user = {};
        $scope.maxDate = new Date();
        $scope.sameasabove = false;

        // select questions
        $scope.data = {
            securityQuestions: [
                { name: 'What is your first school name?' },
                { name: 'What is your pet name?' },
                { name: 'What is your mothers name?' },
                { name: 'What is your grandfathers name?' }
            ]
        };

        //login
        $scope.login = function (record) {
            $scope.loading = true;
            toastr.success('User logged in successfully.');
            $state.go('dashboard', { "username": record.username });
        }

        //signup
        $scope.signup = function (record) {
            toastr.success('Account created successfully.');
            $state.reload();
        }

        //reset
        $scope.reset = function () {
            $scope.user = {};
            $state.reload();
        }

        //sameAsAbove for address
        $scope.sameAsAbove = function () {
            $scope.sameasabove = $scope.sameasabove ? false : true;

            if ($scope.sameasabove) {
                $scope.user.permanent = angular.copy($scope.user.temporary);
            } else {
                $scope.user.permanent = {};
            }
        }

        //Fetch security questions from json file
        $scope.getSecurityQuestions = function () {

            $scope.securityQuestions = [];

            $http.get('security_questions.json').then(function (data) {
                $scope.securityQuestions = data;
                console.log("$scope.securityQuestions : " + JSON.stringify($scope.securityQuestions));
            });
        }

    }
]);