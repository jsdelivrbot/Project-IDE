define(['angular'], function() {
    'use strict';

    angular.module('app')
        .directive('previewDir', previewDir);
    previewDir.$inject = ['$compile', '$controller', '$sce'];


    function previewDir($compile, $controller, $sce) {
        return {
            restrict: 'ACE',
            scope: {
                cont: "=",
            },
            controller: function($scope) {
                if ($scope.cont) {

                    var fn = eval($scope.cont);
                    debugger
                    $controller(fn, { scope: $scope.new }).constructor;
                }
            },

            replace: true,
            link: function(scope, attrs, element) {

                scope.$watch(attrs.ngBind, function(newvalue) {

                    var elem = element;
                    var injector = angular.element(element.$$element[0].children[1]).injector();
                    var compile = injector.get('$compile');
                    var rootScope = injector.get('$rootScope');
                    var result = $compile(element.$$element[0].children[1])(rootScope);

                });


            },

        }
    }
});
