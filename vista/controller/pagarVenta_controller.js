'use strict';
app.controller('PagarVentaController', ['$scope','$sessionStorage','ProductoService','CategoriaProductoService','VentaService','DetalleVentaService',
	function($scope,$sessionStorage,ProductoService,CategoriaProductoService,VentaService,DetalleVentaService) {
	console.log($sessionStorage.SessionMessage);
	$scope.Init=function(){
			$scope.cargaProductos();
			$scope.montoTotal=0;
			
		}
	$scope.cargaProductos=function(){
		$scope.tabla=$sessionStorage.SessionMessage.detalleventa;
	}
	//Metodos llamados desde la Grafica

	$scope.Volver=function(){
			window.location = 'http://' + window.location.host + '/ProyectoFerreteria/vista/vistas/Principal.html#/Venta';
		}
	$scope.getMontoTotal=function(valor,cantidad){
			$scope.montoTotal=parseInt($scope.montoTotal)+(parseInt(valor)*parseInt(cantidad));
		}
	$scope.Comprar=function(){
		var venta={};
		venta.id_usuario=$sessionStorage.SessionMessage.TIPO_USUARIO_id;
		venta.total=$scope.montoTotal;
		$scope.detalleventa={};
		VentaService.CreateVenta(venta)
		.then(
                function(dataVenta){
	                guardar(dataVenta);
	                	
                }, function(errResponse){
    			 console.log(errResponse);
    		});
		}
	$scope.EliminarItem=function(index,valor,cantidad){
			$scope.tabla.splice(index,1);
			$scope.montoTotal=parseInt($scope.montoTotal)-(parseInt(valor)*parseInt(cantidad));
		}


	//Metodos Utilitarios
	function guardar(dataVenta){
		$scope.detalleventa.id_venta=dataVenta[0]["LAST_INSERT_ID()"];
		if ($sessionStorage.SessionMessage.detalleventa[0]!=undefined){
	    $scope.detalleventa.id_producto=$sessionStorage.SessionMessage.detalleventa[0].id_producto;
	    $scope.detalleventa.cantidad=$sessionStorage.SessionMessage.detalleventa[0].cantidad;
		DetalleVentaService.CreateDetalleVenta($scope.detalleventa)
			            .then(
			                function(dataDetalleVenta){
			                	console.log(dataDetalleVenta);
			                	if(dataDetalleVenta==true){
									$scope.tabla.splice(0,1);
									
			                	}
			                	guardar(dataVenta);
			                }, function(errResponse){
			    			 console.log(errResponse);
			    		});
			        }
			        else{
			        	alert("Se ha efectuado la compra");
			        	window.location = 'http://' + window.location.host + '/ProyectoFerreteria/vista/vistas/Principal.html#/Venta';
			        }
		        }
	
$scope.Init();
}]);

