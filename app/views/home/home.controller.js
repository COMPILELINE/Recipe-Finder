// app/views/home/home.controller.js

'use strict';

angular.
module('recipeApp').
controller('HomeController', ['$location', function($location) {
    var vm = this;

    // This function is passed to the search-bar component
    vm.handleSearch = function(query) {
        // When the search is submitted, navigate to the search results page
        $location.path('/search/' + query);
    };
}]);