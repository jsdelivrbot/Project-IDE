define(['angular'], function () {
'use strict';

	angular.module('app')
		.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
		    $urlRouterProvider.otherwise('/');
		    
		    $stateProvider
		        .state('/', {
		            url: '/',
		            templateUrl: '../templates/home.html',
		            controller: 'MainCtrl',
		            resolve: {
		            	load: function ($q) {
		            		var deferred = $q.defer();
		            		require(['main-ctrl'], function () {
		            			deferred.resolve();
		            		}, function () {
		            			deferred.reject();
		            		})
		            		return deferred.promise;
		            	}
		            }
		        })
		        .state('devEditor', {
		            url: '/devEditor',
		            templateUrl: '../templates/dev-editor.html',
		           	controller: 'EditorCtrl',
		            resolve: {
		            	load: function ($q) {
		            		var deferred = $q.defer();
		            		require(['editor-ctrl'], function () {
		            			deferred.resolve();
		            		}, function () {
		            			deferred.reject();
		            		})
		            		return deferred.promise;
		            	}
		            }
		        })
		        
		        .state('component', {
		            url: '/component?folder_name',
		            templateUrl: '../templates/component-Design.html',
		           	controller: 'ComponentCtrl',
		            resolve: {
		            	load: function ($q) {
		            		var deferred = $q.defer();
		            		require(['component-ctrl'], function () {
		            			deferred.resolve();
		            		}, function () {
		            			deferred.reject();
		            		})
		            		return deferred.promise;
		            	}
		            }
		        })					

		        .state('testEditor', {
		            url: '/testEditor?folder_name',
		            templateUrl: '../templates/test-Editor.html',
		           	controller: 'SubCtrl',
		            resolve: {
		            	load: function ($q) {
		            		var deferred = $q.defer();
		            		require(['test-ctrl'], function () {
		            			deferred.resolve();
		            		}, function () {
		            			deferred.reject();
		            		})
		            		return deferred.promise;
		            	}
		            }
		        })
		        .state('dragView', {
		            url: '/dragView',
		            templateUrl: '../templates/drag-drop.html',
		           	controller: 'dragCtrl',
		            resolve: {
		            	load: function ($q) {
		            		var deferred = $q.defer();
		            		require(['drag-ctrl'], function () {
		            			deferred.resolve();
		            		}, function () {
		            			deferred.reject();
		            		})
		            		return deferred.promise;
		            	}
		            }
		        })
		         
		        .state('finalView', {
		            url: '/finalView?file_name',
		            templateUrl: '../templates/finalView.html',
		            controller: 'finalViewCtrl',
		            resolve: {
		            	load: function ($q) {
		            		var deferred = $q.defer();
		            		require(['final-ctrl'], function () {
		            			deferred.resolve();
		            		}, function () {
		            			deferred.reject();
		            		})
		            		return deferred.promise;
		            	}
		            }
		        });
		}]);

});