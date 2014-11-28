var UserController = function($scope, User) {
  $scope.data = {}

  $scope.addUser = function(firstname, lastname) {
    var user = new User();
    user.firstname = firstname;
    user.lastname = lastname;
    user.save().then($scope.refresh);
  }

  $scope.refresh = function() {
    User.query().then(function(response) {
      $scope.data.users = response;
    });
  }

  $scope.refresh();
};
