define(['angular'], function() {
    'use strict';

    angular.module('app')
        .directive('finalDir', finalDir);
    finalDir.$inject = ['$compile', '$controller'];


    function finalDir($compile, $controller) {
        return {
            scope: {
                control: "=",


            },

            replace: true,
            controller: function($scope) {
                 if ($scope.control) {
                    var fn = eval($scope.control);
                    
                    $controller(fn, { scope: $scope.new }).constructor;

                }
            },

            link: function(scope, element, attrs) {

                scope.$watch(attrs.ngBind, function(newvalue) {
                    var fn = eval(scope.control);
                    
                    $controller(fn, { scope: scope.new }).constructor;
                    var elem = element;
                    var injector = angular.element(elem[0].children[1]).injector();
                    var compile = injector.get('$compile');
                    var rootScope = injector.get('$rootScope');
                    var result = $compile(elem[0].children[1])(rootScope);

                });


            },


        }
    }
});
