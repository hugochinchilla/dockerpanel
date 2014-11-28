var UserController = function($scope, api) {
  $scope.hello = "Hello world";

  api.users.query().then(function(response) {
    console.log(response);
  });
};
