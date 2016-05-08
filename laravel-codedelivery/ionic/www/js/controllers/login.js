angular.module('starter.controllers')
    .controller('LoginCtrl', [
        '$scope', 'OAuth', '$ionicPopup', '$state', function ($scope, OAuth, $ionicPopup, $state) {

            $scope.user = {
                username: '',
                password: ''
            };

            $scope.login = function () {
                OAuth.getAccessToken($scope.user)
                    .then(function (data) {
                        $state.go('client.checkout');
                    }, function (responseError) {
                        $ionicPopup.alert({
                            title: 'Advertencia',
                            template: 'login e/ou senha inválidos'
                        })
                    });
            }
        }]);