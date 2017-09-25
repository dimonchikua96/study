(function(){

    var app = angular.module('store',[ ]);

    app.controller('StoreCtrl',function($scope,$http){

        $scope.reviews = [
            {
                "stars": 5,
                "body": "Good product. Very comfortable!",
                "author": "Tanya Gavrilenko"
            },
            {
                "stars": 3,
                "body": "Not so good product!",
                "author": "Dima Gavrilenko"
            }];

        $http.get('../data/phones.json').success(function(data,status,headers,config){
            $scope.phones = data;
        });

    });

    app.controller('PanelController',function($scope,$http){
        this.tab = 1;
        this.selectTab = function(setTab){
            this.tab = setTab;
        };

        this.isSelected = function(selectedTab){
            return this.tab === selectedTab;
        };

    });
    app.controller('ReviewCtrl',function($scope){
        $scope.review = {};

        $scope.addReview = function(reviews){
            reviews.push($scope.review)
        }
    });

    app.controller('ExampleController', ['$scope', function($scope) {
            $scope.list = [];
            $scope.text = 'hello';
            $scope.submit = function() {
                if ($scope.text) {
                    $scope.list.push(this.text);
                    $scope.text = '';
                }
            };
        }]);



})();