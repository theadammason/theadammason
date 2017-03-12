var app = angular.module('mod', ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/about', {
            controller: 'ctrl',
            templateUrl: 'views/about.html'
        })
        .when('/work', {
            controller: 'ctrl',
            templateUrl: 'views/work.html'
        })
        .when('/contact', {
            controller: 'ctrl',
            templateUrl: 'views/contact.html'
        })
        .otherwise({
            redirectTo: '/about'
        });
    $locationProvider.hashPrefix('');
}).directive('break', function() {
    return {
        template: '<div class="break"><div class="container"><div class="row"><div class="col-md-12"><p>&#60;&#47;&#62;</p></div></div></div></div>'
    };
});
