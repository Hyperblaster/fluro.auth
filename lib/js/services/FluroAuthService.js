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

    //Function for logging out the authenticated user
    controller.logout = function() {

        //Check if there is a token
        if (Fluro.token) {

            //Find out what kind of token it is
            var tokenPrefix = Fluro.token.substring(0,3);

            //If the token is a cookie session token for an application
            switch(tokenPrefix) {
                case 'st-':
                    console.log('Destroy client app session')
                    //If using a token redirect to the fluro logout
                    return $window.location.href = '/fluro/logout';
                break;
                case 'mu-':
                case 'ua-':
                    //Clear the user token session
                break;
            }
        }
        
        //Otherwise just hit the auth logout and return the promise
        var url = Fluro.apiURL + '/auth/logout';
        return $http.get(url);



    };

    //////////////////////////

    return controller;

});