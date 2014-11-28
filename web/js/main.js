angular
  .module('DockerPanel', ['ngRoute', 'ngResource', 'evening'])
  .config(['$routeProvider',
    function($routeProvider) {
      $routeProvider.
        when('/users', {
          templateUrl: 'templates/users.html',
          controller: 'UserController'
        }).
        when('/users/:id', {
          templateUrl: 'templates/user-view.html',
          controller: 'UserDetailsController'
        }).
        otherwise({
          redirectTo: '/users'
        });
    }])
  .factory('User', function UserFactory(EveModel, EveCollection) {
    function User(data) {
      EveModel.call(this, data);
    }

    EveModel.extend(User);
    User.prototype._modelName = 'users'; // for URLs
    User.prototype._baseUrl = 'http://127.0.0.1:5000/';  // for URLs, can also be set in API layer

    return User;
  })
  .controller('UserController', ['$scope', 'User', UserController])
  .controller('DomainController', ['$scope', DomainController]);
