angular
  .module('DockerPanel', ['ngResource', 'eveApi'])

  .constant('config', {
    server: { url: 'http://127.0.0.1:5000' }
  })
  .config(["apiProvider", function(apiProvider) {
    apiProvider.api('users', { type:'http', backend: { rel:'users' }});
  }])
  /*
  .factory("User", function(api) {
    //console.log(api);
  })
*/
  .controller('UserController', ['$scope', 'api', UserController])
  .controller('DomainController', ['$scope', DomainController]);
