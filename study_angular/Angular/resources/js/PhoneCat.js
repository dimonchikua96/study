
var TestModule = angular.module('TestModule',[]);

TestModule.controller('DemoCtrl',function($scope){
    $scope.testVar = 'Tanya';
    $scope.phones=[
        {'name':'htc', descr:'very good phone',status:'true'},
        {'name':'asus', descr:'not phone',status:'false'},
        {'name':'iphone', descr:'best phone',status:'false'},
        {'name':'nexus', descr:'good phone',status:'true'}
    ];
    $scope.today = new Date();
    $scope.sortField = 'name';

    $scope.sortFieldOnClick = undefined;
    $scope.reverse = false;

    $scope.sort = function(fieldName){
        if($scope.sortFieldOnClick == fieldName){
            $scope.reverse = !$scope.reverse;
        }else{
            $scope.sortFieldOnClick = fieldName;
            $scope.reverse = false;
        }
    };
    $scope.isUp = function(fieldName){
        return $scope.sortFieldOnClick==fieldName && !$scope.reverse;
    };

    $scope.isDown = function(fieldName){
        return $scope.sortFieldOnClick==fieldName && $scope.reverse;
    };

});


TestModule.controller('ClickCtrl',function($scope){
    $scope.name = 'World';
    $scope.clickButton = function(){
        $scope.name = 'OK';
    };
});

var TestCtrl = function($scope){
    $scope.name = 'Dima';

};

TestModule.controller('PhoneListCtrl',function($scope,$http){
    $scope.name = 'World';

    $http.get('data/phones.json').success(function(data,status,headers,config){
        $scope.phones = data;

    })

});

