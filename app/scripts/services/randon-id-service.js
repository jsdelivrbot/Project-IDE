define(['angular'], function() {
    'use strict'
    angular.module('app').
    factory('GenerateIdForComponent', GenerateIdForComponent)

    GenerateIdForComponent.$inject = [];

    function GenerateIdForComponent() {
        return {
            getRandonId: function() {
                var randonId = Math.floor((Math.random() * 1000000));
                return randonId;
            }
        }
    }

})
