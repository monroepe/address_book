'use strict';

angular.module('myApp.addressBook', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/addressBook', {
    templateUrl: 'addressBook/addressBook.html',
    controller: 'AddressBookCtrl'
  });
}])

.controller('AddressBookCtrl', [function() {

}]);
