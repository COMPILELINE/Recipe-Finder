// app/core/storage.service.js

'use strict';

angular.
module('recipeApp').
factory('favoritesService', [function() {

    var STORAGE_KEY = 'recipeApp.favorites';

    /**
     * Retrieves all favorites from localStorage.
     * @returns {Array} An array of favorite recipe objects.
     */
    function getFavorites() {
        var favoritesJson = localStorage.getItem(STORAGE_KEY);
        return favoritesJson ? JSON.parse(favoritesJson) : [];
    }

    /**
     * Saves the entire list of favorites to localStorage.
     * @param {Array} favorites - The array of favorite recipes.
     */
    function saveFavorites(favorites) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
    }

    // Public API for the service
    var service = {
        /**
         * Adds a recipe to favorites.
         * @param {Object} recipe - The full recipe object to save.
         */
        addFavorite: function(recipe) {
            var favorites = getFavorites();
            // Check if already favorited to prevent duplicates
            if (!this.isFavorite(recipe.idMeal)) {
                favorites.push(recipe);
                saveFavorites(favorites);
            }
        },

        /**
         * Removes a recipe from favorites by its ID.
         * @param {string} recipeId - The ID of the recipe to remove.
         */
        removeFavorite: function(recipeId) {
            var favorites = getFavorites();
            var filteredFavorites = favorites.filter(function(recipe) {
                return recipe.idMeal !== recipeId;
            });
            saveFavorites(filteredFavorites);
        },

        /**
         * Checks if a recipe is already in favorites.
         * @param {string} recipeId - The ID of the recipe to check.
         * @returns {boolean} True if the recipe is a favorite, false otherwise.
         */
        isFavorite: function(recipeId) {
            var favorites = getFavorites();
            return favorites.some(function(recipe) {
                return recipe.idMeal === recipeId;
            });
        },

        /**
         * Gets the full list of saved favorites.
         */
        getFavorites: getFavorites
    };

    return service;
}]);