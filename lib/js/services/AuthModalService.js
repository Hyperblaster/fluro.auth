'use strict';

angular.module('fluro.auth')

.service('AuthModalService', function($modal, $rootScope) {

    return function() {
        var instance = $modal.open({
            templateUrl: 'fluro/auth/authModal.html',
            controller: 'AuthModalController',
        })


        return modalInstance.result.then(function(user) {
            $rootScope.user = user;
        });
    };

});