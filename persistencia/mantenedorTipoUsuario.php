<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
require ("Conecta.php");
$json = file_get_contents('php://input');
$data=json_decode($json); 
$funcion=$data->funcion;
if (strcasecmp($funcion, "findTipoUserById") == 0) {
    $id=$data->id;
    findTipoUserById($id,$conecta);
}
function Createtipo_Usuario($id,$run,$nombre,$apellido_paterno,$apellido_materno,$id_tipo_tipo_Usuario,$contrasenia)
{
    $query =" select 1 FROM tipo_Usuario WHERE id='".$id."'";
    $existe=mysqli_query($conecta,$query);
    if(existe){
    	$query = "UPDATE tipo_Usuario SET  run='".$run."', nombre='".$nombre."', apellido_paterno='".$apellido_paterno."',apellido_materno='".$apellido_materno."',id_tipo_tipo_Usuario='".$id_tipo_tipo_Usuario."',contrasenia='".$contrasenia."' ,estado='".$estado."' where id='".$id."'";
    }else{
    	$query = "INSERT INTO tipo_Usuario VALUES('','".$run."','".$nombre."','".$apellido_paterno."','".$apellido_materno."','".$id_tipo_tipo_Usuario."','".$contrasenia."','".$estado."')";
    }
    
	$resultado=mysqli_query($conecta,$query);
$myArray=array();
 while ($evento = mysqli_fetch_assoc($resultado)) {
	$myArray[]= $evento;
}
echo json_encode($myArray);
mysqli_close($conecta);
}

function DeleteUserById($id)
{
    $query ="DELETE FROM tipo_Usuario WHERE id='".$id."'";
$resultado=mysqli_query($conecta,$query);
mysqli_close();
return $resultado;
}
function DeshabilitaUserById($id)
{
    $query = "UPDATE tipo_Usuario SET estado='Deshabilitado' where id='".$id."'";
$resultado=mysqli_query($conecta,$query);
$myArray=array();
 while ($evento = mysqli_fetch_assoc($resultado)) {
	$myArray[]= $evento;
}
echo json_encode($myArray);
mysqli_close($conecta);
}
function findTipoUserById($id,$conecta)
{
    $query ="select * FROM tipo_Usuario WHERE id='".$id."'";
    $resultado=mysqli_query($conecta,$query);
    $myArray=array();
     while ($evento = mysqli_fetch_assoc($resultado)) {
        $myArray[]= $evento;
    }
    echo json_encode($myArray);
    mysqli_close($conecta);
}



?>

