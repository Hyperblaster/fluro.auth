'use strict';

angular.module('fluro.auth')

.service('FluroAuthService', function($rootScope, $http, FluroConfig) {

    var controller = {};

    //////////////////////////

     //Submit and send back the user
    controller.login = function(email, password) {

        //Auth Login URL
        return $http.post(FluroConfig.fluro_url + '/auth/login', {
            username: email,
            password: password,
        })
    };

    //////////////////////////

    controller.logout = function() {
        var url = FluroConfig.fluro_url + '/auth/logout';
        return $http.get(url)
    };

    //////////////////////////

    return controller;

});