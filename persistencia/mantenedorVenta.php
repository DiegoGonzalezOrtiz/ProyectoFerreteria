<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
require ("Conecta.php");
$json = file_get_contents('php://input');
$data=json_decode($json); 

$funcion=$data->funcion;
if (strcasecmp($funcion, "CreateVENTA") == 0) {
	$id_usuario=$data->id_usuario;
	$total=$data->total;
    CreateVENTA($id_usuario,$total,$conecta);
}
if (strcasecmp($funcion, "findAllVENTA") == 0) {
    findAllVENTA($conecta);
}

function CreateVENTA($id_usuario,$total,$conecta)
{
    $query = "INSERT INTO VENTA VALUES('',".$id_usuario.",CURRENT_TIMESTAMP,".$total.",'Realizada')";
	$resultado=mysqli_query($conecta,$query);
	$query ="select LAST_INSERT_ID()";
	$resultado=mysqli_query($conecta,$query);
	$myArray=array();
 	while ($evento = mysqli_fetch_assoc($resultado)) {
    	$myArray[]= $evento;
	}
	echo json_encode($myArray);
	mysqli_close($conecta);
}

function DeleteVENTAById($id)
{
	require ("Conecta.php");
    $query ="DELETE FROM VENTA WHERE id='".$id."'";
$resultado=$mysql_query($query);
mysql_close();
return $resultado;
}

function findVENTAById($id)
{
	require ("Conecta.php");
    $query ="select * FROM VENTA WHERE id='".$id."'";
$resultado=$mysql_query($query);
mysql_close();
return $resultado;
}
function findVENTAByVendedor($id)
{
	require ("Conecta.php");
    $query ="select * FROM VENTA WHERE id='".$id."'";
$resultado=$mysql_query($query);
mysql_close();
return $resultado;
}
function findVENTAByFechaHora($fechaInicial,$fechaFinal)
{
	require ("Conecta.php");
    $query ="select * FROM VENTA WHERE fecha_hora >='".$fechaInicial."' and fecha_hora <='".$fechaFinal."'";
$resultado=$mysql_query($query);
mysql_close();
return $resultado;
}

function findAllVENTA($conecta)
{
    $query ="select * FROM VENTA";
$resultado=mysqli_query($conecta,$query);
	$myArray=array();
 	while ($evento = mysqli_fetch_assoc($resultado)) {
    	$myArray[]= $evento;
	}
	echo json_encode($myArray);
	mysqli_close($conecta);
}

?>

