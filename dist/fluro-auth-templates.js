angular.module('fluro.auth').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('fluro/auth/authModal.html',
    "<div class=fluro-auth-modal><div class=fluro-modal-header><h1>Login</h1><p class=help>Please log in to continue</p></div><div class=fluro-login-form><form novalidate name=loginForm ng-submit=\"submit(_email, _password)\"><div class=form-element><div class=\"input-group with-icon\"><input type=email id=email name=email ng-required placeholder=\"Email Address\" ng-model=_email><div class=input-icon><i class=\"fa fa-envelope\"></i></div></div></div><div class=form-element><div class=\"input-group with-icon\"><input type=password id=password name=password ng-required placeholder=Password ng-model=_password><div class=input-icon><i class=\"fa fa-lock\"></i></div></div></div><div class=form-actions><button class=\"btn btn-default\" type=submit>Login now</button> <a class=btn ng-click=cancel()>Cancel</a></div></form></div></div>"
  );

}]);
