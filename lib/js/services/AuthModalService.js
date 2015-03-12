'use strict';

angular.module('fluro.ui')


.service('AuthModalService', function($modal, $rootScope) {

    return function() {
        var instance = $modal.open({
            templateUrl: 'fluro/auth/loginModal.html',
            controller: 'AuthModalController',
        })

        return instance.result.then(function(user) {
            $rootScope.user = user;
        });
    };

});