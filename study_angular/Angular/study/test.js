function MyCtrl($scope) {
    $scope.action = function() {
        $scope.name = 'OK';
    };

    $scope.name = 'World';
}

angular.module('timeExampleModule', []).
    // ������� �����, ��������� ��� �������� ������
    // � ������� ��� time
    factory('time', function($timeout) {
        var time = {};

        (function tick() {
            time.now = new Date();
            $timeout(tick, 1000);
        })();
        return time;
    });

// �������� �������� �� ��, ��� ����� ������ ��������� time
// � ������ ����� ������������. �� ����� ������ ������.
function ClockCtrl($scope, time) {
    $scope.time = time;
}