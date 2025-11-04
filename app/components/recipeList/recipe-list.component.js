'use strict';

angular.
module('recipeApp').
component('recipeList', {
    templateUrl: 'app/components/recipeList/recipe-list.template.html',
    bindings: {
        recipes: '<'
    },
    controller: function RecipeListController() {
        var vm = this;
    }
});