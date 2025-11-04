// app/views/favorites/favorites.controller.js

'use strict';

angular.
module('recipeApp').
controller('FavoritesController', ['favoritesService',
    function FavoritesController(favoritesService) {
        var vm = this;

        vm.favorites = [];

        // Load favorites from the service
        function loadFavorites() {
            vm.favorites = favoritesService.getFavorites();
        }

        // We use $onInit to ensure this runs when the controller is initialized
        vm.$onInit = function() {
            loadFavorites();
        };

        // Note: If a favorite is removed *on this page*,
        // the list won't update automatically.
        // A more advanced solution would use $rootScope.$broadcast
        // or a watcher, but for this project, a page reload
        // (or navigating away and back) will update the list.
    }
]);