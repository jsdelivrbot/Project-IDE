define(['angular', 'codeflask', 'FolderListService'], function () {
'use strict';

	angular.module('app')
		.controller('EditorCtrl', EditorCtrl);
	EditorCtrl.$inject =  ['$scope', '$state', 'FolderListService'];

	function EditorCtrl ($scope, $state, FolderListService) {

		$scope.editorObj = {
			folder: []
		};

		var jsDefaultContent = '(function () { /** * controller name = test */ angular.module(\'app\') .controller(\'testCtrl\', testCtrl); testCtrl.$inject = [\'$scope\']; function testCtrl ($scope) { $scope.message = \'It Works!!\'; } })';
		var htmlDefaultContent = '<div data-ng-controller="testCtrl">{{message}}</div>';

		$scope.newFolder = {
			folder_name: '',
			folder_desc: '',
			files: {
				css: [{file_name: 'main.css', content: ''}],
				js: [{file_name: 'main.js', content: jsDefaultContent}],
				html: [{file_name: 'index.html', content: htmlDefaultContent}]
			}
		}


    		
    		FolderListService.getRecords()
    			.then(function (response) {
    				$scope.editorObj.folder = response;
    			}, function (error) {
    				console.log(error);
    			});


    	$scope.createFolder = function () {
    		if($scope.newFolder.folder_name && $scope.newFolder.folder_desc) {
    			
	    		FolderListService.postRecord(JSON.stringify($scope.newFolder))
	    			.then(function (response) {
	    				$scope.editorObj.folder.push(response);
	    			}, function (error) {
	    				console.log(error);
	    			});

    		}
    	}
    	$scope.deleteFolder = function (folder_name, index) {
	    		FolderListService.deleteRecord(folder_name)
	    			.then(function (response) {
	    				$scope.editorObj.folder.splice(index, 1);
	    			}, function (error) {
	    				console.log(error);
	    			});
    	}

    	$scope.viewComponent = function (folder_name) {
    		//$state.go('component', {folder_name: folder_name});
    		$state.go('testEditor', {folder_name: folder_name});
    	}

	}

});