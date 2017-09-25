<!doctype html>
<html ng-app="timeExampleModule">
<head>
    <script src="/angular/resources/js/angular/angular.min.js"></script>
    <script type="application/javascript">
 
        var timeExampleModule = angular.module('timeExampleModule', []).
            // Объявим новый, доступный для инъекций объект
            // и назовем его time
            factory('time', function($timeout) {
                var time = {};
                (function tick() {
                    time.now = new Date();
                    $timeout(tick, 1000);
                })();
                return time;
            });

        timeExampleModule.controller('ClockCtrl', function($scope,time){
            $scope.time = time;
        });
    </script>
</head>
<body>
<div ng-controller="ClockCtrl">
    Текущее время: {{ time.now | date:'dd.MM.yyyy h:mm:ss'}}
</div>
</body>
</html>