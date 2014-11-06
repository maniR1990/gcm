'use strict';

var mob_app = angular.module('mob_test',[]);

mob_app.controller('proj_ctrl',function($scope){
$scope.slider = {
    'x':0,
    'y':0,
    'z':0,
    'angle':0
};
 $scope.rotatex = "rotateX(0deg)";
 $scope.rotatey = "rotateY(0deg)";
 $scope.d = "rotate3d(0,0,0,0)";
 //$scope.rot="rotateX(0deg)"+"rotateY(0deg)";
$scope.$watch('slider',function(n,o){
   
 
   
   $scope.rotatex = "rotateX("+n.x+"deg)";
   $scope.rotatey = "rotateY"+n.y+"deg)";
   // $scope.rot = "rotateX("+n.x+"deg)" +"rotateY"+n.y+"deg)";
   
  $scope.d = 'rotate3d('+n.x+','+n.y+','+n.z+','+n.angle+'deg)';
    
},true);


  // When the number changes, update the transform string
 

});


