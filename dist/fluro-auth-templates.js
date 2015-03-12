angular.module('fluro.auth').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('fluro/auth/authModal.html',
    "<div><form novalidate name=loginForm ng-submit=\"submit(_email, _password)\"><div class=form-element><div class=\"input-group with-icon\"><input type=email id=email name=email ng-required placeholder=\"Email Address\" ng-model=_email><div class=input-icon><i class=\"fa fa-envelope\"></i></div></div></div><div class=form-element><div class=\"input-group with-icon\"><input type=password id=password name=password ng-required placeholder=Password ng-model=_password><div class=input-icon><i class=\"fa fa-lock\"></i></div></div></div><div class=form-actions><button class=\"btn btn-default\" type=submit>Login now</button><div class=right><a ng-click=forgotPassword()>I forgot my password</a></div></div></form></div>"
  );

}]);
