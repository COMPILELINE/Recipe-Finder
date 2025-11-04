// app/app.config.js

'use strict';

angular.
module('recipeApp').
config(['$routeProvider',
    function config($routeProvider) {
        $routeProvider.
        when('/', {
            templateUrl: 'app/views/home/home.template.html',
            controller: 'HomeController',
            controllerAs: 'vm'
        }).
        when('/search/:query', {
            templateUrl: 'app/views/searchResults/search-results.template.html',
            controller: 'SearchResultsController',
            controllerAs: 'vm'
        }).
        when('/recipe/:id', {
            templateUrl: 'app/views/recipeDetail/recipe-detail.template.html',
            controller: 'RecipeDetailController',
            controllerAs: 'vm'
        }).
        when('/favorites', {
            templateUrl: 'app/views/favorites/favorites.template.html',
            controller: 'FavoritesController',
            controllerAs: 'vm'
        }).
        otherwise({
            redirectTo: '/'
        });
    }
]);