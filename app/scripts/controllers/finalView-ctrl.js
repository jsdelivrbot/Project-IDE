define(['angular', 'FolderDataService', 'FolderListService', 'GenerateIdForComponent', 'final-Dir', 'd3'],function(){

	angular.module("app")
	.controller("finalViewCtrl",finalViewCtrl);

	finalViewCtrl.$inject = ['$scope', '$state','FolderDataService', 'GenerateIdForComponent', 'FolderListService', '$sce', '$timeout', '$rootScope', '$compile'];


	function finalViewCtrl ($scope,$state, FolderDataService, GenerateIdForComponent, FolderListService, $sce, $timeout, $rootScope, $compile){

		$scope.container=[];
		$scope.fileData = '';
		  $("#menu-toggle").click(function(e) {
            e.preventDefault();
            $("#wrapper").toggleClass("active");
        });

		  function createRow(){
		  	var row = document.createElement("div");
		  	row.className = "row"
		  	return row;

		  }

		  function createColoum(number){

		  	var col = document.createElement("div");
		  	col.className = "col-md-"+number;
		  	var panel = createPanel();
		  	col.append(panel);
		  	
		  	return col

		  }
		  function createPanel(){
		  	var panel = document.createElement("div");
		  	panel.setAttribute('class','panel panel-blur animated zoomIn');

		  	var subPanel = document.createElement("div");
		  	subPanel.setAttribute('class','panel-heading clearfix');
		  		var subHeading = document.createElement("h3");
		  		subHeading.setAttribute('class','panel-title');
		  		subHeading.textContent = 'XYZ';
		  		subPanel.append(subHeading);
		  	var subPanel2= document.createElement("div");
		 		subPanel2.setAttribute('class','panel-body');

		 		panel.append(subPanel);
		 		
		 		createDirective(subPanel2);
		 		panel.append(subPanel2);
		 		return panel;
		  }

		  function createDirective(element){
		  		var directive = document.createElement("final-dir");
                directive.setAttribute("data-ng-bind-html", "container[" + $scope.rowIndex + "][" + $scope.colIndex + "].templateData[0]");
                directive.setAttribute("control", "container[" + $scope.rowIndex + "][" + $scope.colIndex + "].controller[0]");
               return element.append(directive);
               

		  }

		$scope.refineStructure = [];
		  var file_name =  $state.params.file_name;
		  
		  if(file_name !== undefined) {
			  FolderDataService.getComponent(file_name)
			  .then(function(response){
			  		$scope.fileData = response;


			  		
			  		for(var i=0;i<$scope.fileData.finalStructures.length;i++ ){
			  				$scope.refineStructure.push([]);
			  				$scope.fileData.finalStructures[i].map(function(value,index){
			  					
			  					if(value.html.length>0){
			  						
			  						$scope.refineStructure[i].push(value);
			  					}
			  			});

			  			

			  		}
			  		
			var myArr =	[[12,0],[6,0],[4,0],[3,0],[3,12],[3,6],[3,4],[3,3]];

			var element = document.getElementById('page-content-wrapper');
				
			  		$scope.refineStructure.map(function(value,index){
			  			$scope.container.push([]);
			  			$scope.rowIndex = index;
			  			var colNo = value.length;
			  			var row = createRow();
			  			
			  			value.map(function(val,index){
			  				$scope.container[$scope.rowIndex].push({templateData:[],controller:[]})
			  				
			  				$scope.container[$scope.rowIndex][index].templateData.push($sce.trustAsHtml('<style>' + val.css[0] + '</style>' + val.html[0]));
			  				$scope.container[$scope.rowIndex][index].controller.push(val.controller[0]);
			  				
			  				$scope.colIndex = index;
			  				var colTocall =[];
			  				colTocall.push(myArr[colNo-1]);
			  				for( var i=0;i<colTocall.length;i++)
				  				{	if(index < 4){
				  					var col = createColoum(colTocall[i][0]);
				  					}
				  					else{
				  						var col = createColoum(colTocall[i][1]);
				  					}
				  				}
				  					
				  				
				  				row.append(col)
			  				

			  			})

			  			element.append(row)
			  		})
			  		debugger
			  		
			  		$compile(element)($scope);

				},function (error) {
			  		 console.log(error)
			  })
		  }

		  
		
	}
});