// app/components/recipeList/recipe-list.component.js

'use strict';

angular.
module('recipeApp').
component('recipeList', {
    templateUrl: 'app/components/recipeList/recipe-list.template.html',
    bindings: {
        recipes: '<' // One-way binding for the array of recipes
    },
    controller: function RecipeListController() {
        var vm = this;
    }
});