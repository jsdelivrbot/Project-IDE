define(['angular', 'FolderDataService', 'FolderListService', 'GenerateIdForComponent', 'component-dir', 'd3'], function() {
    'use strict';

    angular.module('app')
        .controller('dragCtrl', dragCtrl);
    dragCtrl.$inject = ['$scope', '$state','FolderDataService', 'GenerateIdForComponent', 'FolderListService', '$sce', '$timeout', '$rootScope', '$compile'];

    function dragCtrl($scope,$state, FolderDataService, GenerateIdForComponent, FolderListService, $sce, $timeout, $rootScope, $compile) {

        var PageId =  GenerateIdForComponent.getRandonId();

        $scope.componentData = [

        ];
        $scope.finalStructure = [];

        $scope.container = [];
        $scope.columns = 1;


        $scope.dropedComponent = [];
        $scope.templateData = [];
        $scope.cont = [];
        $scope.dynamicID = [];
        FolderListService.getRecords()
            .then(function(response) {
                $scope.componentData = response;
            }, function(error) {
                console.log(error);
            });

        $scope.addText = "";

        var createRowDivision = function() {
            var rowDiv = document.createElement("div");
            rowDiv.className = "row";
            rowDiv.style = "background : #DEDEDE;"
            var percentage = parseInt(100 / $scope.columns);
            $scope.container.push([]);
            $scope.finalStructure.push([])
            var rowIndex = $scope.container.length - 1;

            for (var i = 0; i < $scope.columns; i++) {
                rowDiv.append(createColDivision(percentage, rowIndex, i));
            }
            return rowDiv;
        }

        var createColDivision = function(percentage, rowIndex, colIndex) {
            var colDiv = document.createElement("div");
            var index = colIndex;

            colDiv.style = "height :100%;border:1px dotted black;width:" + percentage + "%;float:left"
            colDiv.append(createComponentDiv(rowIndex, colIndex))
            return colDiv;

        }

        var createComponentDiv = function(rowIndex, colIndex) {

            var compDiv = document.createElement("div");
            var att1 = document.createAttribute("ui-draggable");
            compDiv.style = "min-height : 100px;border:1px solid blue; z-index:1000 ; height:100%"
            att1.value = "false";
            var att2 = document.createAttribute("drag");
            att2.value = "container["+rowIndex+"]["+colIndex+"].templateData";
            var att3 = document.createAttribute("ui-on-Drop");
            att3.value = "onDrop($event,$data," + rowIndex + "," + colIndex + ")";
            
           
            $scope.container[rowIndex].push({
               
                templateData: []
               
            });

            $scope.finalStructure[rowIndex].push({
                css: [],
                html: [],
                controller: []
            });

            compDiv.setAttributeNode(att1)
            compDiv.setAttributeNode(att2)
            compDiv.setAttributeNode(att3)
            
            return compDiv;


        }
        // $scope.getCurrentElement =function(e) {
            
        //     if( e.target.id === "sidebar-wrapper" ||  e.target.id === "page-content-wrapper" || e.target.attributeName==="row")
        //     {   
        //         $scope.currentTarget = e.target;
        //     }
        //     else{
        //         e.stopPropagation();
        //     }
        // }
        $scope.createColumn = function(e) {
                var element = document.getElementById("proContainer");
                element.append(createRowDivision());
                $compile(element)($scope);
        }

        var createContainer = function(element,elementclass){
            var div = document.createElement(element);
            div.setAttribute("class",elementclass);
            return div;
        }


     // function createDiv (element) {
     //    return document.createElement(element);
     //    }

     //    function setClass(element,classN){
     //        return  element.className = classN ;
     //    }
     //    function setAttributes (element,attributeName,attributeValue){
     //            return element.setAttribute(attributeName,attributeValue)
     //    }

     //    function setStyle (element,value) {
     //        return element.style=value;
     //    }

     //    function appendChildren(parent,child){
     //        return parent.append(child);

     //    }


     //    $scope.schema = function(){
            
     //        var wrapper = createDiv('div');
     //        setClass(wrapper,"side-nav");
     //        setAttributes(wrapper,"id","wrapper");
     //        //setStyle(wrapper,"background:#000");
     //        setAttributes(wrapper,"data-toggle","modal");
     //        setAttributes(wrapper,"data-target","#add_row");
     //        setAttributes(wrapper,"data-ng-click","getCurrentElement($event)");
            
     //        var sidebarWrapper = createDiv('div');
     //            setAttributes(sidebarWrapper,"id","sidebar-wrapper")
     //             // setStyle(wrapper,"background:green;opacity:0.4");
     //        var sidebarWrapperChildOne = createDiv('div');
     //            setAttributes(sidebarWrapperChildOne,"class","row");
     //            setAttributes(sidebarWrapperChildOne,"class","toggleClass");
     //            setStyle(wrapper,"background:pink");
     //        var sideBarWrapperNavOption = createDiv('div');
     //            setAttributes(sideBarWrapperNavOption,"class","row");
     //            setAttributes(sideBarWrapperNavOption,"class","nav-option");
     //            setAttributes(sideBarWrapperNavOption,"id","nav-option")
     //           // setStyle(wrapper,"background:yellow;opacity:0.2");
     //        var pageContentWrapper = createDiv('div');
     //            setAttributes(pageContentWrapper,"id","page-content-wrapper")
     //            setAttributes(pageContentWrapper,"ui-view","");
     //            //setStyle(pageContentWrapper,"background:red;opacity:0.6");

                
     //    appendChildren(sidebarWrapper,sidebarWrapperChildOne);
     //    appendChildren(sidebarWrapper,sideBarWrapperNavOption);
            
     //    appendChildren(wrapper,sidebarWrapper);
     //    appendChildren(wrapper,pageContentWrapper);
        
     //        var element = document.getElementById("proContainer");
     //        element.append(wrapper);
     //        $compile(element)($scope);
     //    }





        $scope.dropSuccessHandler = function($event, index, array) {

            //array.splice(index,1);
        };

        $scope.onDrop = function($event, $data, rowIndex, colIndex) {
            $scope.finalStructure[rowIndex][colIndex].controller.push($data.files.js[0].content);
            $scope.finalStructure[rowIndex][colIndex].html.push($data.files.html[0].content);
            $scope.finalStructure[rowIndex][colIndex].css.push($data.files.css[0].content);
            $scope.container[rowIndex][colIndex].templateData.push($sce.trustAsHtml('<span class="btn btn-primary  ng-binding" style="min-width: 150px ">'+$data.folder_name+'</span>'));
            //
            // $scope.container[rowIndex][colIndex].templateData.push($sce.trustAsHtml('<style>' + $data.files.css[0].content + '</style>' + $data.files.html[0].content + '<i  style="position: absolute; right: -10px;top: 6px;font-size: 20px;" class="fa fa-trash-o" aria-hidden="true"  id =' + $scope.dynamicID + ' ></i>'));
            // $scope.container[rowIndex][colIndex].controller.push($data.files.js[0].content)
               if($event.target.children.length > 0){
                    for(var i= 0 ;i< $event.target.children.length ;i++){
                         $event.target.removeChild($event.target.children[i]);
                    }
                    
               }

               
                var innerDiv = document.createElement("component-dir");
                innerDiv.setAttribute("data-ng-bind-html", "container[" + rowIndex + "][" + colIndex + "].templateData[0]");
                $event.target.append(innerDiv);
                $compile($event.target)($scope);

                


        };

        $scope.savedFileName='';

        $scope.viewComponent = function () {
            
           $state.go('finalView', {file_name: $scope.savedFileName});
         }

        $scope.saveComponent = function(componentName) {

            $scope.savedFileName =componentName ;
            if(componentName !== undefined) {
            FolderDataService.addComponent($scope.finalStructure,componentName,PageId)
                .then(function(response) {

                        console.log("component saved successfully")
                    },
                    function(error) {
                        console.log("not saved")
                    });
            }
        }

    }

});
