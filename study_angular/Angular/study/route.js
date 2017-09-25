
    var RouteApp = angular.module('RouteApp',['ngRoute']);

    RouteApp.config(['$routeProvider',function($routeProvide){
        $routeProvide
            .when('/',{
                templateUrl:'templates/home.html',
                controller:'HomeCtrl'
            })
            .when('/link',{
                templateUrl:'templates/link.html',
                controller:'LinkCtrl'
            })
            .when('/contact',{
                templateUrl:'templates/contact.html',
                controller:'ContactCtrl'
            })
            .otherwise({
                redirectTo:'templates/home.php'
            })
    }]);

    RouteApp.controller('HomeCtrl', ['$scope','$http','$location',function($scope,$http,$location){


    }]);

    RouteApp.controller('LinkCtrl', ['$scope','$http','$location',function($scope,$http,$location){


    }]);

    RouteApp.controller('ContactCtrl', ['$scope','$http','$location',function($scope,$http,$location){


    }]);

    RouteApp.controller('RouteCtrl', ['$scope','$http','$location',function($scope,$http,$location){

       console.log('url'+$location.url());
       console.log('path'+$location.path());
       console.log('search'+$location.search());
       console.log('hash'+$location.hash());


    }]);


