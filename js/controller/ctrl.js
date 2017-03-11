var app = angular.module('mod');

app.controller('ctrl', function($scope){
  var date = new Date();
  $scope.year = date.getFullYear();
});
