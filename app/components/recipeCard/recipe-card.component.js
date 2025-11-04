// app/components/recipeCard/recipe-card.component.js

'use strict';

angular.
module('recipeApp').
component('recipeCard', {
    templateUrl: 'app/components/recipeCard/recipe-card.template.html',
    bindings: {
        recipe: '<' // One-way binding for a single recipe object
    },
    controller: function RecipeCardController() {
        var vm = this;

        // Create the link for this recipe
        vm.$onInit = function() {
            vm.detailLink = '#!/recipe/' + vm.recipe.idMeal;
        };
    }
});