<!doctype html>
<html>
<head>
    <script src="/angular/resources/js/angular/angular.min.js"></script>
    <script type="application/javascript">

        var servicesApp = angular.module('servicesApp', []);

        servicesApp.constant('fooConfig', {
            config1: true,
            config2: "Default config2"
        });

        servicesApp.controller('servicesCtrl', function ($scope,fooConfig) {
            $scope.fooConfig = fooConfig;
        });


    </script>
</head>
<body ng-app="servicesApp">
<div ng-controller="servicesCtrl">

    {{fooConfig}}

</div>
</body>
</html>