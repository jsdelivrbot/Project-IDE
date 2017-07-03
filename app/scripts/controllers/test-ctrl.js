define(['beautify', 'beautify-html', 'beautify-css', 'angular', 'GenerateIdForComponent', 'ace', 'FolderDataService', 'preview-dir', 'd3'], function(js_beautify, html_beautify, css_beautify) {
    'use strict';

    angular.module('app')
        .controller('SubCtrl', SubCtrl);

    SubCtrl.$inject = ['$scope', '$state', 'FolderDataService', '$sce', '$controller', '$compile', '$rootScope', 'GenerateIdForComponent'];

    function SubCtrl($scope, $state, FolderDataService, $sce, $controller, $compile, $rootScope, GenerateIdForComponent) {
        var editorHTML, editorJS, editorCSS, fn;

        $scope.fileData = {};
        $scope.editor = {
            html: '',
            css: '',
            js: ''
        }
        $scope.jsFile = '';
        $scope.controllerCode = [];
        var folder_name = $state.params.folder_name;

        FolderDataService.getRecords(folder_name)
            .then(function(response) {
                $scope.fileData = response;

                // beautify html
                $scope.editor.html = html_beautify.html_beautify(response.files.html[0].content);
                editorHTML.insert($scope.editor.html);

                // beautify js
                $scope.editor.js = js_beautify.js_beautify(response.files.js[0].content);
                editorJS.insert($scope.editor.js);

                // beautify css
                $scope.editor.css = css_beautify.css_beautify(response.files.css[0].content);
                editorCSS.insert($scope.editor.css);
            }, function(error) {
                console.log(error);
            });


        $scope.aceLoadedHTML = function(_editor) {
            editorHTML = _editor;
        }
        $scope.aceLoadedJS = function(_editor) {
            editorJS = _editor;
        }

        $scope.aceLoadedCSS = function(_editor) {
            editorCSS = _editor;
        }

        $scope.aceChanged = function(e) {

            if (e[1].container.id === 'html') {
                $scope.editor.html = e[1].getSession().getValue();
            }

            if (e[1].container.id === 'js') {
                $scope.editor.js = e[1].getSession().getValue();
            }
            if (e[1].container.id === 'css') {
                $scope.editor.css = e[1].getSession().getValue();
            }
        };

        $scope.preview = function() {

            $scope.templateData = $sce.trustAsHtml('<style>' + $scope.editor.css + '</style>' + $scope.editor.html);
            $scope.controllerCode = $scope.editor.js;
            var innerDiv = document.createElement("preview-dir");
            innerDiv.setAttribute("data-ng-bind-html", "templateData");
            innerDiv.setAttribute("cont", "controllerCode");
            innerDiv.style = "height:100%;width: 100%";
            var elem = document.getElementById("previewContainer");
            if (elem.children[0]) {
                elem.removeChild(elem.children[0]);
            }
            elem.append(innerDiv);
            $compile(elem)($scope);


        }

        $scope.saveContent = function() {

            $scope.fileData.files.css[0].content = $scope.editor.css;
            $scope.fileData.files.html[0].content = $scope.editor.html;
            $scope.fileData.files.js[0].content = $scope.editor.js;
            FolderDataService.postRecord($scope.fileData)
                .then(function(response) {

                }, function(error) {
                    console.log(error);
                });

        }

    }


});
