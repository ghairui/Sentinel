var app = angular.module('sentinelDashboardApp');

app.service('VersionService', ['$http', function ($http) {
  this.version = function () {
    return $http({
      url: '/version',
      method: 'GET'
    });
  };

  this.projectName = function () {
      return $http({
        url: '/projectName',
        method: 'GET'
      });
    };
  this.projectEnv = function () {
    return $http({
      url: '/projectEnv',
      method: 'GET'
    });
  };

  this.projectEnvHref = function () {
    return $http({
      url: '/projectEnvHref',
      method: 'GET'
    });
  };
}]);
