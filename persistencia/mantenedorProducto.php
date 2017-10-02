<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
require ("Conecta.php");
$json = file_get_contents('php://input');
$data=json_decode($json); 


$funcion=$data->funcion;
if (strcasecmp($funcion, "CreateProducto") == 0) {
    $descripcion=$data->descripcion;
    $id=$data->id;
    $CATEGORIA_PRODUCTO_id=$data->CATEGORIA_PRODUCTO_id;
    $nombre=$data->nombre;
    $precio=$data->precio;
    $stock=$data->stock;
    $descripcion=$data->descripcion;
    CreateProducto($id,$CATEGORIA_PRODUCTO_id,$nombre,$precio,$stock,$descripcion,$conecta);
}
if (strcasecmp($funcion, "findAllProducto") == 0) {
    findAllProducto($conecta);
}
if (strcasecmp($funcion, "DeleteCATEGORIA_ProductoById") == 0) {
    $id=$data->id;
    DeleteCATEGORIA_ProductoById($id,$conecta);
}
if (strcasecmp($funcion, "ModificarStock") == 0) {
    $id=$data->id;
    $stock=$data->stock;
    ModificarStock($id,$stock,$conecta);
}


function CreateProducto($id,$CATEGORIA_PRODUCTO_id,$nombre,$precio,$stock,$descripcion,$conecta)
{
$query =" select * FROM PRODUCTO WHERE id='".$id."'";
    $existe=mysqli_query($conecta,$query);
    if (mysqli_num_rows($existe)==0){
    	$query = "INSERT INTO PRODUCTO VALUES('','".$CATEGORIA_PRODUCTO_id."','".$nombre."','".$precio."','".$stock."','".$descripcion."')";
    }else{
        $query = "UPDATE PRODUCTO SET 
         CATEGORIA_PRODUCTO_id='".$CATEGORIA_PRODUCTO_id."',
        nombre='".$nombre."',
        precio='".$precio."',
        stock='".$stock."',
        descripcion='".$descripcion."' 
        where id='".$id."'";
    }
	$resultado=mysqli_query($conecta,$query);
	echo json_encode($resultado);
	mysqli_close($conecta);
}

function DeleteCATEGORIA_ProductoById($id,$conecta)
{
	$query ="DELETE FROM PRODUCTO WHERE id='".$id."'";
	$resultado=mysqli_query($conecta,$query);
	echo json_encode($resultado);
	mysqli_close($conecta);
}


function findProductoById($id)
{
    $query ="select * FROM PRODUCTO WHERE id='".$id."'";
	$resultado=mysqli_query($conecta,$query);
	$myArray=array();
	while ($evento = mysqli_fetch_assoc($resultado)) {
		$myArray[]= $evento;
	}
	echo json_encode($myArray);
	mysqli_close($conecta);
}

function findAllProducto($conecta)
{
    $query ="select * FROM PRODUCTO";
	$resultado=mysqli_query($conecta,$query);
	$myArray=array();
 	while ($evento = mysqli_fetch_assoc($resultado)) {
    	$myArray[]= $evento;
	}
	echo json_encode($myArray);
	mysqli_close($conecta);
}

function ModificarStock($id,$stock,$conecta)
{
	$query = "update PRODUCTO set stock='".$stock."' where id='".$id."'";
	$resultado=mysqli_query($conecta,$query);
	echo json_encode($resultado);
	mysqli_close($conecta);
}

?>