'use strict';

angular.
module('recipeApp').
factory('recipeApiService', ['$http', '$q', function($http, $q) {

    var BASE_URL = 'https://www.themealdb.com/api/json/v1/1/';

    function transformMealData(meal) {
        if (!meal) return meal;

        meal.ingredients = [];
        for (var i = 1; i <= 20; i++) {
            var ingredient = meal['strIngredient' + i];
            var measure = meal['strMeasure' + i];

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

    var service = {
        searchRecipes: function(query) {
            return $http.get(BASE_URL + 'search.php?s=' + query)
                .then(function(response) {
                    return response.data.meals || [];
                })
                .catch(function(error) {
                    console.error('API Error in searchRecipes:', error);
                    return $q.reject('Failed to search recipes.');
                });
        },

        getRecipeById: function(id) {
            return $http.get(BASE_URL + 'lookup.php?i=' + id)
                .then(function(response) {
                    if (response.data.meals && response.data.meals.length > 0) {
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