
//Create Fluro UI With dependencies
angular.module('fluro.auth', [
	'fluro.config'
	]);
'use strict';

angular.module('fluro.auth')

.controller('AuthModalController', function($scope, $rootScope, FluroAuthService, Fluro, $http, $state) {

    //Dismiss the modal
    $scope.cancel = function() {
    	$rootScope.user = null;
        $scope.$dismiss();
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
'use strict';

angular.module('fluro.auth')

.service('AuthModalService', function($modal, $rootScope) {

    return function() {
        var instance = $modal.open({
            templateUrl: 'fluro/auth/authModal.html',
            controller: 'AuthModalController',
        })


        return instance.result.then(function(user) {
            $rootScope.user = user;
        });
    };

});
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

        if (Fluro.token) {
            if(Fluro.token.substring(0,3) == 'st-') {
                console.log('Destroy client session')
                //If using a token redirect to the fluro logout
                return   $window.location.href = '/fluro/logout';
            }
        }
        
        var url = Fluro.apiURL + '/auth/logout';
        return $http.get(url)
        

    };

    //////////////////////////

    return controller;

});