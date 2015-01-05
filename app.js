var angular = require("angular");
var react = require("react");

require("ngReact");

var Hello = require("./Hello.jsx");

var app = angular.module('app', ['react']);

app.controller('helloController', function($scope) {
  $scope.person = {fname: 'Clark', lname: 'Kent'};
});

app.directive('hello', function(reactDirective) {
  return reactDirective(Hello);
} );

angular.bootstrap(document, ['app']);