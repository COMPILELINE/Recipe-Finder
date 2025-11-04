// app/components/navBar/nav-bar.component.js

'use strict';

angular.
module('recipeApp').
component('navBar', {
    templateUrl: 'app/components/navBar/nav-bar.template.html',
    controller: function NavBarController() {
        var vm = this;
        vm.title = 'Recipe Finder';
    }
});