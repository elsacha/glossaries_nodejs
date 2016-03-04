// var controllers = require('./controllers');
// var directives = require('./directives');
// //var services = require('./services');
// var _ = require('underscore');

// var components = angular.module('glossaries.components', ['ng']);

// _.each(controllers, function(controller, name) {
//   components.controller(name, controller);
// });

// _.each(directives, function(directive, name) {
//   components.directive(name, directive);
// });

// _.each(services, function(factory, name) {
//   components.factory(name, factory);
// });

var glossariesApp = angular.module('glossariesApp', ['ngRoute']);


//add hashes for testing in the url bar: ex,  http://127.0.0.1:49656/#/test
glossariesApp.config(function($routeProvider) {
    $routeProvider                       
  .when('/', {
        templateUrl: './views/engrus_search.html',
        controller: 'EngRusController'
    })
    
    .when('/engrus', {
        templateUrl: './views/engrus_search.html',
        controller: 'EngRusController'
    })
   .when('/engrus/:w', {
  //     template: '<eng-rus-directive></eng-rus-directive>'
      templateUrl: './views/engrus_result.html',
      controller: 'EngRusController'
    })
});

