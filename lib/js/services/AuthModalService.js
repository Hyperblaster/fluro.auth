'use strict';

angular.module('fluro.auth')


.service('AuthModalService', function($modal, $rootScope) {

    return function() {
        var instance = $modal.open({
            templateUrl: 'fluro/auth/authModal.html',
            controller: 'AuthModalController',
            backdrop: 'static',
        })

        return instance.result.then(function(user) {
        	console.log('Login result', user);
            $rootScope.user = user;
        });
    };

});