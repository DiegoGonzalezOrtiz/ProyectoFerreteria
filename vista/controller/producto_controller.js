'use strict';
app.controller('ProductoController', ['$scope','$sessionStorage','ProductoService','CategoriaProductoService',
	function($scope,$sessionStorage,ProductoService,CategoriaProductoService) {
	$scope.tabla={};
	$scope.Init=function(){
		$scope.findAllCATEGORIA_Producto();
		$scope.findAllProducto();
		$scope.id=0;
		$scope.descripcion="";
	}

	$scope.findAllProducto=function(){
		ProductoService.findAllProducto()
    		.then(
                function(dataProducto){
                $scope.tabla=dataProducto;
    		}, function(errResponse){
    			 console.log("Problemas al encontrar productos");
    		});
	}
	$scope.findAllCATEGORIA_Producto=function(){
		CategoriaProductoService.findAllCATEGORIA_Producto()
    		.then(
                function(dataProducto){
                	console.log(dataProducto);
                $scope.CategoriasProductos=dataProducto;
    		}, function(errResponse){
    			 console.log("Problemas al Cargar Categorias");
    		});
	}
	//Metodos llamados desde la Grafica
	$scope.mensajeDatosInsuficientes=function(){
		alert("Faltan datos obligatorios");
	}
	$scope.modifyProducto=function(item){
		console.log(item);
		$scope.descripcion=item.descripcion;
		var i=0;
		for(i=0;i<$scope.CategoriasProductos.length;i++){
			console.log($scope.CategoriasProductos[i]);
			if($scope.CategoriasProductos[i].id==item.CATEGORIA_PRODUCTO_id){
				$scope.categoria=$scope.CategoriasProductos[i];

			}
		}
		$scope.nombre=item.nombre;
		$scope.precio=item.precio;
		$scope.Stock=item.stock;
		$scope.id=item.id;
	}
	$scope.CreateProducto=function(){
		var valores={};
		valores.id=$scope.id;
		valores.CATEGORIA_PRODUCTO_id=$scope.categoria.id;
		valores.nombre=$scope.nombre;
		valores.precio=($scope.precio);
		valores.stock=($scope.Stock);
		valores.descripcion=$scope.descripcion;
		ProductoService.CreateProducto(valores)
    		.then(
                function(dataUsuario){
				$scope.Init();
                console.log(dataUsuario);
    			if (dataUsuario==true){
    				alert("Se guardo la  exitosamente");
    			}else{
                    alert("Error");
    			}
    		}, function(errResponse){
    			 console.log("Problemas al logear");
    		});
	}
	$scope.DeleteProductoById=function(id){
		var valores={};
		valores.id=id;
		ProductoService.DeleteProductoById(valores)
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
	
	$scope.traducirCategoria=function(idCategoria){
			var result="";
			var i=0;
		for(i=0;i<$scope.CategoriasProductos.length;i++){
			if($scope.CategoriasProductos[i].id==idCategoria){
				result=$scope.CategoriasProductos[i].descripcion;
			}
			}
			return result;
		}
	//Metodos Utilitarios

		
		function convertToNumber(tasa){
		
		var tasaFloat;
		if(tasa === undefined || tasa == null)
		{
			tasaFloat = 0;
			return tasaFloat;
		}else
		{
			if(tasa.toString().includes("."))
			{
				tasaFloat = replaceAll(tasa.toString(), ".", "");
			}else
			{
				tasaFloat = tasa;
			}
		}
		return parseFloat(tasaFloat);
		}
$scope.Init();
}]);

