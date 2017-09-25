<script src="/angular/resources/js/angular/angular.js"></script>
<script src="/angular/resources/js/angular/angular-sanitize.js"></script>

<script type="text/javascript">
    //angular-----------------------------------------------------
    var app = angular.module('app', ['ngSanitize']);

    app.controller('appCtrl', ['$scope', '$sce', function ($scope, $sce) {

        $scope.DeviceLink = function (compassname) {
            var link = compassname;
            var firstLetters = compassname.substring(0, 2).toUpperCase();
            if (firstLetters == 'TS') {
                link = '<a target="_blank" href="https://10.55.5.55/stat/termcard.php?term=' + compassname + '">' + compassname + '</a>';
            } else if (firstLetters == 'CA') {
                link = '<a target="_blank" href="https://10.55.5.55/stat/atmcard.php?atm=' + compassname + '">' + compassname + '</a>';
            }
            return $sce.trustAsHtml(link);
        };

    }]);

    //angular-----------------------------------------------------

</script>
<div ng-app="app">
    <div ng-controller="appCtrl">
        <p ng-bind-html="DeviceLink('TS202406')"></p>
    </div>
</div>


