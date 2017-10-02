'use strict';
app.controller('VentaController', ['$scope','$sessionStorage','ProductoService','CategoriaProductoService','VentaService',
	function($scope,$sessionStorage,ProductoService,CategoriaProductoService,VentaService) {
	$scope.tabla=[];
	if($sessionStorage.SessionMessage.detalleventa==undefined){
		$sessionStorage.SessionMessage.detalleventa=[];
	}
	
		
	$scope.Init=function(){
		$scope.findAllCATEGORIA_Producto();
		$scope.findAllProducto();
		}

	$scope.findAllProducto=function(){
		ProductoService.findAllProducto()
    		.then(
                function(dataProducto){
                $scope.tablacompleta=dataProducto;
                $scope.tabla=dataProducto;
    		}, function(errResponse){
    			 console.log("Problemas al encontrar productos");
    		});
	}
	$scope.findAllCATEGORIA_Producto=function(){
		CategoriaProductoService.findAllCATEGORIA_Producto()
    		.then(
                function(dataProducto){
                $scope.CategoriasProductos=dataProducto;

    		}, function(errResponse){
    			 console.log("Problemas al Cargar Categorias");
    		});
	}
	//Metodos llamados desde la Grafica
	$scope.goPagar=function(){
			window.location = 'http://' + window.location.host + '/ProyectoFerreteria/vista/vistas/Principal.html#/PagarVenta';
		}

	$scope.AgregarVentaById=function(item){
		console.log(item);
		$scope.detalleventa={};
		$scope.detalleventa.id_producto=item.id;
		$scope.detalleventa.cantidad=item.cantidad;
		$scope.detalleventa.nombre=item.nombre;
		$scope.detalleventa.precio=item.precio;
		var esta=false;
		var i=0;
		for(i=0;i<$sessionStorage.SessionMessage.detalleventa.length;i++){
			if($sessionStorage.SessionMessage.detalleventa[i].id_producto==item.id){
				$sessionStorage.SessionMessage.detalleventa[i].cantidad=parseInt($sessionStorage.SessionMessage.detalleventa[i].cantidad)+parseInt(item.cantidad);
				esta=true;
			}
		}
		if(!esta){

		$sessionStorage.SessionMessage.detalleventa.push($scope.detalleventa);
		}
		alert("Se ha añadido el producto satisfactoriamente");
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
		$scope.FiltraCategorias=function(categoria){
			if(categoria!=undefined){
					var i=0;
					$scope.tabla=[];
				for(i=0;i<$scope.tablacompleta.length;i++){
					if($scope.tablacompleta[i].CATEGORIA_PRODUCTO_id==categoria.id){
					$scope.tabla.push($scope.tablacompleta[i]);
					}
				}
			}
			else{
				$scope.tabla=$scope.tablacompleta;
			}

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

