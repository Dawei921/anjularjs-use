var app=angular.module('myApp',[]);

app.controller('FirstController', ['$scope', function($scope){
	$scope.name='tom'; //在作用域中定义变量
	$scope.show=function(){ //在作用域中定义方法
		console.log('Hello:'+$scope.name);
	};
	
}]);

app.controller('SecondController', ['$scope', function($scope){
	 $scope.name='alice';
	// var name='mike';
	$scope.show=function(){ //在作用域中定义方法
		console.log('您好:'+$scope.name);
	};
}]);

