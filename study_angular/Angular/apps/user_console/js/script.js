var app = angular.module('App', []);


app.controller('myCtrl', function ($scope) {
    $scope.new_user = {};
    $scope.currentView = 'userTable';
    $scope.setCurrentView = function(view){
        $scope.currentView = view;
    };

    $scope.user_list = [{'name':'Dima','surname':'Gavrilenko',"age":26},
                        {'name':'Tanya','surname':'Gavrilenko',"age":25},
                        {'name':'Lukas','surname':'Gavrilenko',"age":3}];


    $scope.remove_user = function(index){
        $scope.user_list.splice(index,1);
    };

    $scope.addUser = function(){
        $scope.action = 'addUser';
        $scope.setCurrentView('addUser');
    };

    $scope.edit_user = function(index){
        $scope.new_user = $scope.user_list[index];
        $scope.currentUserIndex = index;
        $scope.action = 'editUser';
        $scope.setCurrentView('addUser');
    };

    $scope.saveUser = function(){
        var new_user = $scope.new_user;
        if(new_user.name!=''){
            if ($scope.action == 'addUser'){
                $scope.user_list.push({'name':new_user.name,'surname':new_user.surname,"age":new_user.age});
            }else if($scope.action == 'editUser'){
                $scope.user_list[$scope.currentUserIndex]={'name':new_user.name,'surname':new_user.surname,"age":new_user.age};
            }
            $scope.setCurrentView('userTable');
            angular.forEach($scope.new_user, function(value, key) {
                $scope.new_user[key]='';
            });
        }
    }
});
