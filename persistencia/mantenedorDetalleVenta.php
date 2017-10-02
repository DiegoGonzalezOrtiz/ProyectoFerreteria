<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
require ("Conecta.php");
$json = file_get_contents('php://input');
$data=json_decode($json); 

$funcion=$data->funcion;
if (strcasecmp($funcion, "Createdetalle_venta") == 0) {
	$id_venta=$data->id_venta;
	$id_producto=$data->id_producto;
	$cantidad=$data->cantidad;
    Createdetalle_venta($id_producto,$id_venta,$cantidad,$conecta);
	}
	



function Createdetalle_venta($id_producto,$id_venta,$cantidad,$conecta)
{
    $query = "INSERT INTO detalle_venta VALUES('".$id_producto."','".$id_venta."','".$cantidad."')";
	$resultado=mysqli_query($conecta,$query);
	echo json_encode($resultado);
	mysqli_close($conecta);
}
function Deletedetalle_ventaById($id)
{
	require ("Conecta.php");
    $query ="DELETE FROM detalle_venta WHERE id='".$id."'";
$resultado=$mysql_query($query);
mysql_close();
return $resultado;
}

function finddetalle_ventaByIdVenta($id_venta)
{
	require ("Conecta.php");
    $query ="select * FROM detalle_venta WHERE id_venta='".$id_venta."'";
$resultado=$mysql_query($query);
mysql_close();
return $resultado;
}
function findAlldetalle_venta()
{
	require ("Conecta.php");
    $query ="select * FROM detalle_venta";
$resultado=$mysql_query($query);
mysql_close();
return $resultado;
}

?>