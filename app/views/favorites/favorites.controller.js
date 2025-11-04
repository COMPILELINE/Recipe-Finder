'use strict';

angular.
module('recipeApp').
controller('FavoritesController', ['favoritesService',
    function FavoritesController(favoritesService) {
        var vm = this;

        vm.favorites = [];

        function loadFavorites() {
            vm.favorites = favoritesService.getFavorites();
        }

        vm.$onInit = function() {
            loadFavorites();
        };
    }
]);