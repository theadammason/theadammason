var app = angular.module('mod');

app.controller('ctrl', function($scope, $interval){
  var date = new Date();
  $scope.year = date.getFullYear();

  var luigi = [
  "img/walk1.png",
  "img/walk2.png",
  "img/walk3.png"
  ];
  var walkIndex = 0
  $scope.walkPics = luigi;
  $scope.luigi = $scope.walkPics[walkIndex];

    $interval(function(){

      if(walkIndex>2){
        walkIndex=0;
      };
      $scope.luigi = $scope.walkPics[walkIndex++];
      }, 100);
});
