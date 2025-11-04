'use strict';

angular.
module('recipeApp').
controller('SearchResultsController', ['$routeParams', '$location', 'recipeApiService',
    function SearchResultsController($routeParams, $location, recipeApiService) {
        var vm = this;

        vm.isLoading = true;
        vm.isError = false;
        vm.recipes = [];
        vm.query = $routeParams.query;

        vm.handleSearch = function(query) {
            $location.path('/search/' + query);
        };

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

        search();
    }
]);