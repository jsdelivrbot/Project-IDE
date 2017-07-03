define(['angular', 'codeflask', 'FolderDataService', 'preview-dir'], function() {
    'use strict';

    angular.module('app')
        .controller('ComponentCtrl', ComponentCtrl);
    ComponentCtrl.$inject = ['$scope', '$state', 'FolderDataService', '$sce'];

    function ComponentCtrl($scope, $state, FolderDataService, $sce) {

        $scope.fileData = {};
        $scope.editor = {
            html: '',
            css: '',
            js: ''
        }
        $scope.jsFile = '';

        var folder_name = $state.params.folder_name;

        var htmlInstance = new CodeFlask;
        htmlInstance.run('#html-writer', { language: 'html', lineNumbers: true });
        htmlInstance.onUpdate(function(code) {
            $scope.editor.html = code;

        });
        var jsInstance = new CodeFlask;
        jsInstance.run('#javascript-writer', { language: 'javascript', lineNumbers: true });
        jsInstance.onUpdate(function(code) {
            $scope.editor.js = code;


        });
        var cssInstance = new CodeFlask;
        cssInstance.run('#css-writer', { language: 'css', lineNumbers: true });
        cssInstance.onUpdate(function(code) {
            $scope.editor.css = code;

        });



        FolderDataService.getRecords(folder_name)
            .then(function(response) {
                $scope.fileData = response;
                var htmlFile = response.files.html[0].content;
                $scope.jsFile = response.files.js[0].content;
                var cssFile = response.files.css[0].content;

                htmlInstance.update(htmlFile)
                jsInstance.update($scope.jsFile)
                cssInstance.update(cssFile)

            }, function(error) {
                console.log(error);
            });



        $scope.saveChanges = function() {

            $scope.fileData.files.css[0].content = $scope.editor.css;
            $scope.fileData.files.html[0].content = $scope.editor.html;
            $scope.fileData.files.js[0].content = $scope.editor.js;
            $scope.templateData = $sce.trustAsHtml('<style>' + $scope.editor.css + '</style>' + $scope.editor.html);
            FolderDataService.postRecord($scope.fileData)
                .then(function(response) {

                }, function(error) {
                    console.log(error);
                });

        }

    }
});
