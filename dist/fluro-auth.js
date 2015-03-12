
//Create Fluro UI With dependencies
angular.module('fluro.auth', [])
'use strict';

angular.module('fluro.ui')

.controller('AuthModalController', function($scope, $rootScope, FluroConfig, $http, $state) {

    //Dismiss the modal
    $scope.cancel = function() {
    	$rootScope.user = null;
        $scope.$dismiss();
        //$state.go('home'); //TODO FIGURE OUT HOW TO HANDLE THIS
    }

    //Submit and send back the user
    $scope.submit = function(email, password) {

    	//Auth Login URL
    	$http.post(FluroConfig.fluro_url + '/auth/login', {
            username: email,
            password: password,
        })

        .error(function(result) {
            $rootScope.user = null;
            //console.log('LOGIN ERROR', result)
        })

        .success(function(user) {
            $scope.$close(user);
        });
    };


});
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