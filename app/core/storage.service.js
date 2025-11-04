'use strict';

angular.
module('recipeApp').
factory('favoritesService', [function() {

    var STORAGE_KEY = 'recipeApp.favorites';

    function getFavorites() {
        var favoritesJson = localStorage.getItem(STORAGE_KEY);
        return favoritesJson ? JSON.parse(favoritesJson) : [];
    }

    function saveFavorites(favorites) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
    }

    var service = {
        addFavorite: function(recipe) {
            var favorites = getFavorites();
            if (!this.isFavorite(recipe.idMeal)) {
                favorites.push(recipe);
                saveFavorites(favorites);
            }
        },

        removeFavorite: function(recipeId) {
            var favorites = getFavorites();
            var filteredFavorites = favorites.filter(function(recipe) {
                return recipe.idMeal !== recipeId;
            });
            saveFavorites(filteredFavorites);
        },

        isFavorite: function(recipeId) {
            var favorites = getFavorites();
            return favorites.some(function(recipe) {
                return recipe.idMeal === recipeId;
            });
        },

        getFavorites: getFavorites
    };

    return service;
}]);