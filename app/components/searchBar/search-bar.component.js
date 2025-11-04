'use strict';

angular.
module('recipeApp').
component('searchBar', {
    templateUrl: 'app/components/searchBar/search-bar.template.html',
    bindings: {
        initialQuery: '<',
        onSearch: '&'
    },
    controller: function SearchBarController() {
        var vm = this;
        
        vm.$onInit = function() {
            vm.query = vm.initialQuery || '';
        };

        vm.submitSearch = function() {
            if (vm.query) {
                vm.onSearch({ query: vm.query });
            }
        };
    }
});