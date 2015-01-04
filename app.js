require("./bower_components/angular/angular.js");
require("./bower_components/react/react.js");
require("./bower_components/react/JSXTransformer.js");
require("./bower_components/ngReact/ngReact.js");
// var Hello = require("./Hello.jsx");

setTimeout( function() {
  var app = angular.module('app', ['react']);

  app.controller('helloController', function($scope) {
    $scope.person = {fname: 'Clark', lname: 'Kent'};
  });

  // app.directive('hello', function(reactDirective) {
  //   return reactDirective(Hello);
  // } );

  angular.bootstrap(document, ['app']);
}, 1000 );
