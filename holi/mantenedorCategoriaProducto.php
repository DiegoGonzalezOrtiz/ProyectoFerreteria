<?php
function CreateCATEGORIA_PRODUCTO($descripcion)
{
	require ("Conecta.php");
    $query = "INSERT INTO CATEGORIA_PRODUCTO VALUES('','".$descripcion."')";
$resultado=$mysql_query($query);
mysql_close();
return $resultado;
    
}
function DeleteCATEGORIA_ProductoById($id)
{
	require ("Conecta.php");
    $query ="DELETE FROM CATEGORIA_PRODUCTO WHERE id='".$id."'";
$resultado=$mysql_query($query);
mysql_close();
return $resultado;
}

function findCATEGORIA_ProductoById($id)
{
	require ("Conecta.php");
    $query ="select * FROM CATEGORIA_PRODUCTO WHERE id='".$id."'";
$resultado=$mysql_query($query);
mysql_close();
return $resultado;
}
function findAllCATEGORIA_Producto()
{
	require ("Conecta.php");
    $query ="select * FROM CATEGORIA_PRODUCTO";
$resultado=$mysql_query($query);
mysql_close();
return $resultado;
}

?>

