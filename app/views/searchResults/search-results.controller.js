// app/views/searchResults/search-results.controller.js

'use strict';

angular.
module('recipeApp').
controller('SearchResultsController', ['$routeParams', '$location', 'recipeApiService',
    function SearchResultsController($routeParams, $location, recipeApiService) {
        var vm = this;

        // State flags
        vm.isLoading = true;
        vm.isError = false;
        vm.recipes = [];
        vm.query = $routeParams.query; // Get the query from the URL

        // Function passed to the search-bar
        vm.handleSearch = function(query) {
            // Re-route to a new search URL
            $location.path('/search/' + query);
        };

        // Fetch recipes when the controller loads
        function search() {
            if (!vm.query) {
                vm.isLoading = false;
                return;
            }

            vm.isLoading = true;
            vm.isError = false;

            recipeApiService.searchRecipes(vm.query)
                .then(function(data) {
                    vm.recipes = data;
                })
                .catch(function(error) {
                    vm.isError = true;
                    vm.errorMessage = error;
                })
                .finally(function() {
                    vm.isLoading = false;
                });
        }

        // Initial search
        search();
    }
]);