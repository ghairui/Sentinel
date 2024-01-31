var app = angular.module('sentinelDashboardApp');

app.service('VersionService', ['$http', function ($http) {
  this.projectName = function () {
    return $http({
      url: '/projectName',
      method: 'GET'
    });
  };
}]);

var app = angular.module('sentinelDashboardApp');

app.service('VersionService', ['$http', function ($http) {
  this.projectEnv = function () {
    return $http({
      url: '/projectEnv',
      method: 'GET'
    });
  };
}]);

var app = angular.module('sentinelDashboardApp');

app.service('VersionService', ['$http', function ($http) {
  this.projectEnvHref = function () {
    return $http({
      url: '/projectEnvHref',
      method: 'GET'
    });
  };
}]);