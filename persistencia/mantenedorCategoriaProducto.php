<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
require ("Conecta.php");
$json = file_get_contents('php://input');
$data=json_decode($json); 


$funcion=$data->funcion;
if (strcasecmp($funcion, "saveCategoriaProducto") == 0) {
    $descripcion=$data->descripcion;
    $id=$data->id;
    saveCategoriaProducto($id,$descripcion,$conecta);
}
if (strcasecmp($funcion, "findAllCATEGORIA_Producto") == 0) {
    findAllCATEGORIA_Producto($conecta);
}
if (strcasecmp($funcion, "DeleteCATEGORIA_ProductoById") == 0) {
    $id=$data->id;
    DeleteCATEGORIA_ProductoById($id,$conecta);
}
function saveCategoriaProducto($id,$descripcion,$conecta)
{
    $query =" select * FROM CATEGORIA_PRODUCTO WHERE id='".$id."'";
    $existe=mysqli_query($conecta,$query);
    if (mysqli_num_rows($existe)==0){
    	$query = "INSERT INTO CATEGORIA_PRODUCTO VALUES('','".$descripcion."')";
    }else{
        $query = "UPDATE CATEGORIA_PRODUCTO SET  descripcion='".$descripcion."' where id='".$id."'";
    }
	$resultado=mysqli_query($conecta,$query);
	
echo json_encode($resultado);
mysqli_close($conecta);
}

function DeleteCATEGORIA_ProductoById($id,$conecta)
{
$query ="DELETE FROM CATEGORIA_PRODUCTO WHERE id='".$id."'";
$resultado=mysqli_query($conecta,$query);
echo json_encode($resultado);
mysqli_close($conecta);
}

function findCATEGORIA_ProductoById($id)
{
	require ("Conecta.php");
    $query ="select * FROM CATEGORIA_PRODUCTO WHERE id='".$id."'";
$resultado=$mysql_query($query);
mysql_close();
return $resultado;
}

function findAllCATEGORIA_Producto($conecta)
{
    $query ="select * FROM CATEGORIA_PRODUCTO";
$resultado=mysqli_query($conecta,$query);
$myArray=array();
 while ($evento = mysqli_fetch_assoc($resultado)) {
    $myArray[]= $evento;
}
echo json_encode($myArray);
mysqli_close($conecta);
}

?>

