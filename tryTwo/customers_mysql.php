<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
require ("Conecta.php");
$query ="select * FROM tipo_usuario";
$resultado=mysqli_query($conecta,$query);
$myArray=array();
 while ($evento = mysqli_fetch_assoc($resultado)) {
	$myArray[]= $evento;
}
echo json_encode($myArray);
mysqli_close($conecta);
?>