<!doctype html>
<html>
<head>
    <script src="/angular/resources/js/angular/angular.min.js"></script>
    <script type="application/javascript">
        var app = angular.module('app', []);
        app.controller('mainCtrl', function ($scope, $http) {
            $http.get('/angular/data/phones.json').success(function (data) {
              //  $scope.phones = data;
            });

            $scope.phones =  [{'name': 'О нас'},
                              {'name': 'Педагоги'},
                              {'name': 'Галерея'},
                              {'name': 'Новости'},
                              {'name': 'Статьи'},
                              {'name': 'Расписание'},
                              {'name': 'Контакты'}];

            $scope.userList = function () {
                alert(100);
            }

        });

        app.directive('createOl', function () {
            return function (scope, element, attributes) {
                //получаем занчение аттрибута createSelect -> phones
                var attrVal = attributes['createOl'];
                //получаем данные из скоуп по имени аттрибута phones
                var data = scope[attrVal];
                if(angular.isArray(data)){
                    var html = angular.element('<ol>');
                    console.log(data.length);
                    for(var i = 0; i < data.length; i++){
                        html.append(angular.element('<li>'+data[i].name));
                    }
                    html.append(angular.element('</ol>'));
                    element.append(html);
                }
            }
        });
    </script>
</head>
<body ng-app="app">
<div ng-controller="mainCtrl">
    <div create-ol="phones"></div>
</div>
</body>
</html>