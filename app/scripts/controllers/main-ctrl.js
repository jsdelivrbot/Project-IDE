define(['angular', 'jquery-flipster'], function () {
'use strict';

	angular.module('app')
		.controller('MainCtrl', MainCtrl);
	MainCtrl.$inject =  ['$scope'];

	function MainCtrl ($scope) {
		$("#coverflow").flipster();
	}

});