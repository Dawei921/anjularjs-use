var app = angular.module('myApp',[]);

app.controller('FormController', ['$scope', function($scope){
	$scope.fields=[
		{id:'txtName',name:'name',type:"text",isReq:true,placeholder:'请输入用户名'},
		{id:'txtPwd',name:'pwd',type:"password",isReq:true,placeholder:'请输入密码'},
		{id:'txtEmail',name:'email',type:"email",isReq:false,placeholder:'请输入邮箱'},
	]
	$scope.doSubmit=function(){
		for(var i=0; i<$scope.fields.length; i++){
			console.log($scope.fields[i].name+"="+$scope.fields[i].value);
		}
	}
}])