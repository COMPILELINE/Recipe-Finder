'use strict';

angular.
module('recipeApp').
controller('RecipeDetailController', ['$routeParams', 'recipeApiService', 'favoritesService', '$window',
    function RecipeDetailController($routeParams, recipeApiService, favoritesService, $window) {
        var vm = this;

        vm.isLoading = true;
        vm.isError = false;
        vm.recipe = null;
        vm.isFavorite = false;
        var recipeId = $routeParams.id;

        vm.goBack = function() {
            $window.history.back();
        };

        vm.toggleFavorite = function() {
            if (vm.isFavorite) {
                favoritesService.removeFavorite(vm.recipe.idMeal);
            } else {
                favoritesService.addFavorite(vm.recipe);
            }
            vm.isFavorite = !vm.isFavorite;
        };

        function loadRecipe() {
            vm.isLoading = true;
            vm.isError = false;

            recipeApiService.getRecipeById(recipeId)
                .then(function(data) {
                    vm.recipe = data;
                    vm.isFavorite = favoritesService.isFavorite(vm.recipe.idMeal);
                })
                .catch(function(error) {
                    vm.isError = true;
                    vm.errorMessage = error;
                })
                .finally(function() {
                    vm.isLoading = false;
                });
        }

        loadRecipe();
    }
]);