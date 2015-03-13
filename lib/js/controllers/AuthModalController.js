'use strict';

angular.module('fluro.auth')

.controller('AuthModalController', function($scope, $rootScope, FluroAuthService, Fluro, $http, $state) {

    //Dismiss the modal
    $scope.cancel = function() {
    	$rootScope.user = null;
        $scope.$dismiss();
        //$state.go('home'); //TODO FIGURE OUT HOW TO HANDLE THIS
    }

    //Submit and send back the user
    $scope.submit = function(email, password) {

        var req = FluroAuthService.login(email,password);

        req.error(function(result) {
            $rootScope.user = null;
            //console.log('LOGIN ERROR', result)
        })

        req.success(function(user) {
            $scope.$close(user);
        });
    };


});