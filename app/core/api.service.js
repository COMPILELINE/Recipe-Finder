// app/core/api.service.js

'use strict';

angular.
module('recipeApp').
factory('recipeApiService', ['$http', '$q', function($http, $q) {

    var BASE_URL = 'https://www.themealdb.com/api/json/v1/1/';

    /**
     * Transforms the awkward MealDB 'strIngredient1, strMeasure1' format
     * into a clean array of objects.
     */
    function transformMealData(meal) {
        if (!meal) return meal;

        meal.ingredients = [];
        for (var i = 1; i <= 20; i++) {
            var ingredient = meal['strIngredient' + i];
            var measure = meal['strMeasure' + i];

            // Stop if no more ingredients
            if (ingredient && ingredient.trim() !== "") {
                meal.ingredients.push({
                    ingredient: ingredient,
                    measure: measure
                });
            } else {
                break;
            }
        }
        return meal;
    }

    // Public API for the service
    var service = {
        /**
         * Searches for recipes by name.
         * @param {string} query - The search term (e.g., "Arrabiata")
         * @returns {Promise} A promise that resolves with an array of meals.
         */
        searchRecipes: function(query) {
            return $http.get(BASE_URL + 'search.php?s=' + query)
                .then(function(response) {
                    // Return the array of meals, or an empty array if no results
                    return response.data.meals || [];
                })
                .catch(function(error) {
                    console.error('API Error in searchRecipes:', error);
                    return $q.reject('Failed to search recipes.');
                });
        },

        /**
         * Gets a single recipe by its unique ID.
         * @param {string} id - The meal ID (e.g., "52772")
         * @returns {Promise} A promise that resolves with a single, transformed meal object.
         */
        getRecipeById: function(id) {
            return $http.get(BASE_URL + 'lookup.php?i=' + id)
                .then(function(response) {
                    if (response.data.meals && response.data.meals.length > 0) {
                        // Transform the single meal data before returning
                        var meal = transformMealData(response.data.meals[0]);
                        return meal;
                    } else {
                        return $q.reject('Recipe not found.');
                    }
                })
                .catch(function(error) {
                    console.error('API Error in getRecipeById:', error);
                    return $q.reject('Failed to get recipe details.');
                });
        }
    };

    return service;
}]);