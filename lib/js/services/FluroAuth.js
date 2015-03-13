'use strict';

angular.module('fluro.auth')

.service('FluroAuthService', function($rootScope, $http, Fluro) {

    var controller = {};

    //////////////////////////

    //Submit and send back the user
    controller.login = function(email, password) {

        //Auth Login URL
        return $http.post(Fluro.apiUrl + '/auth/login', {
            username: email,
            password: password,
        })
    };

    //////////////////////////

    //Submit and send back the user
    controller.getSession = function() {

        //Auth Login URL
        return $http.get(Fluro.apiUrl + '/auth/session');
    };

    //////////////////////////

    controller.logout = function() {
        var url = Fluro.apiUrl + '/auth/logout';
        return $http.get(url)
    };

    //////////////////////////

    return controller;

});