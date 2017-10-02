'use strict';

app.controller('CategoriaProductoController', ['$scope','$sessionStorage','CategoriaProductoService',
	function($scope,$sessionStorage,CategoriaProductoService) {
	$scope.tabla={};
	$scope.Init=function(){
		$scope.findAllCATEGORIA_Producto();
		$scope.id=0;
		$scope.descripcion="";
	}

	$scope.findAllCATEGORIA_Producto=function(){
		CategoriaProductoService.findAllCATEGORIA_Producto()
    		.then(
                function(dataUsuario){
                $scope.tabla=dataUsuario;
    		}, function(errResponse){
    			 console.log("Problemas al logear");
    		});
	}
	//Metodos llamados desde la Grafica
	$scope.mensajeDatosInsuficientes=function(){
		alert("Faltan datos obligatorios");
	}
	$scope.modifyCategoriaProducto=function(item){
		$scope.descripcion=item.descripcion;
		$scope.id=item.id;
	}
	$scope.saveCategoriaProducto=function(){
		var valores={};
		valores.id=$scope.id;
		valores.descripcion=$scope.descripcion;
		CategoriaProductoService.saveCategoriaProducto(valores)
    		.then(
                function(dataUsuario){
				$scope.Init();
                console.log(dataUsuario);
    			if (dataUsuario==true){
    				alert("Se guardo la categoria exitosamente");
    			}else{
                    alert("Error");
    			}
    		}, function(errResponse){
    			 console.log("Problemas al logear");
    		});
	}
	$scope.DeleteCATEGORIA_ProductoById=function(id){
		var valores={};
		valores.id=id;
		CategoriaProductoService.DeleteCATEGORIA_ProductoById(valores)
    		.then(
                function(dataUsuario){
              	$scope.Init();
                console.log(dataUsuario);
    			if (dataUsuario==true){
    				alert("Eliminado");
    			}else{
                    alert("Error");
    			}
    		}, function(errResponse){
    			 console.log("Problemas al Eliminar");
    		});
	}
$scope.Init();
}]);

