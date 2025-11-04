// app/components/searchBar/search-bar.component.js

'use strict';

angular.
module('recipeApp').
component('searchBar', {
    templateUrl: 'app/components/searchBar/search-bar.template.html',
    bindings: {
        initialQuery: '<', // One-way binding for pre-filling the search
        onSearch: '&'      // Output binding for when a search is submitted
    },
    controller: function SearchBarController() {
        var vm = this;
        
        // Initialize the query value
        vm.$onInit = function() {
            vm.query = vm.initialQuery || '';
        };

        // Called when the form is submitted
        vm.submitSearch = function() {
            if (vm.query) {
                // Execute the onSearch binding, passing the query as an object
                vm.onSearch({ query: vm.query });
            }
        };
    }
});