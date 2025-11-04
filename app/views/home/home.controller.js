'use strict';

angular.
module('recipeApp').
controller('HomeController', ['$location', function($location) {
    var vm = this;

    vm.handleSearch = function(query) {
        $location.path('/search/' + query);
    };
}]);