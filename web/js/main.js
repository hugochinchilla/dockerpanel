angular
  .module('DockerPanel', ['ngResource', 'evening'])
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
