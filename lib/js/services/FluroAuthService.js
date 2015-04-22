'use strict';

angular.module('fluro.auth')

.service('FluroAuthService', function($rootScope, $window, $http, Fluro) {

    var controller = {};

    //////////////////////////

    //Submit and send back the user
    controller.login = function(email, password) {

        //Auth Login URL
        return $http.post(Fluro.apiURL + '/auth/login', {
            username: email,
            password: password,
        })
    };

    //////////////////////////

    //Submit and send back the user
    controller.switchAccount = function(accountId) {

        //Auth Login URL
        return $http.post(Fluro.apiURL + '/auth/switch/' + accountId);
    };

    //////////////////////////

    //Submit and send back the user
    controller.getSession = function() {

        //Auth Login URL
        return $http.get(Fluro.apiURL + '/session');
    };

    //////////////////////////

    controller.logout = function() {
        if (Fluro.token && Fluro.token.splice(0,3) == 'st-') {
            //If using a token redirect to the fluro logout
            $window.location.href = '/fluro/logout';
        } else {
            var url = Fluro.apiURL + '/auth/logout';
            return $http.get(url)
        }

    };

    //////////////////////////

    return controller;

});