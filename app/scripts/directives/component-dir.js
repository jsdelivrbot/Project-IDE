define(['angular'], function() {
    'use strict';

    angular.module('app')
        .directive('componentDir', componentDir);
    componentDir.$inject = ['$compile', '$controller'];


    function componentDir($compile, $controller) {
        return {
            scope: {
                message: "=",


            },

            replace: true,
            controller: function($scope) {

                if ($scope.message) {

                    var fn = eval($scope.message);
                    $controller(fn, { scope: $scope.new }).constructor;
                }
            },

            link: function(scope, element, attrs) {

                scope.$watch(attrs.ngBind, function(newvalue) {
                    
                    // var elem = element;
                    // var injector = angular.element(elem[0].children[1]).injector();
                    // var compile = injector.get('$compile');
                    // var rootScope = injector.get('$rootScope');
                    // var result = $compile(elem[0].children[1])(rootScope);

                });


            },


        }
    }
});
