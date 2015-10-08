'use strict';

angular.module('myApp.addressBook', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/addressBook', {
    templateUrl: 'addressBook/addressBook.html',
    controller: 'AddressBookCtrl'
  });
}])

.controller('AddressBookCtrl', ['$scope', function($scope) {
  $scope.contacts = [
    {
      name: 'Peter',
      phone: '773-555-4444'
    },
    {
      name: 'Cristina',
      phone: '857-777-8888'
    }
  ];
}]);
