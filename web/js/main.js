angular.module('app', ['components'])

.controller('UserController', ['$scope'], UserController)
.controller('DomainController', ['$scope'], DomainController)
.config();
