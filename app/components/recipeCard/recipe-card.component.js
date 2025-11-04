'use strict';

angular.
module('recipeApp').
component('recipeCard', {
    templateUrl: 'app/components/recipeCard/recipe-card.template.html',
    bindings: {
        recipe: '<'
    },
    controller: function RecipeCardController() {
        var vm = this;

        vm.$onInit = function() {
            vm.detailLink = '#!/recipe/' + vm.recipe.idMeal;
        };
    }
});