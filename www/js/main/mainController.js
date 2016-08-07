ionicApp.controller("mainController", ['$scope', '$http',
  function ($scope, $http) {
    $http.get('data/data.json').success(
      function (data) {
        $scope.games = data;
      }
    )
  }]);

