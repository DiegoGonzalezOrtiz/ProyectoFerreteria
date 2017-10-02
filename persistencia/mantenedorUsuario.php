<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
require ("Conecta.php");
$json = file_get_contents('php://input');
$data=json_decode($json); 
/*
$id=$_POST["id"];
$nombre=$_POST["nombre"];
$apellido_paterno=$_POST["apellido_paterno"];
$apellido_materno=$_POST["apellido_materno"];

$funcion=$_POST["funcion"];

$contrasenia=$_POST["contrasenia"];*/

//$id_tipo_usuario=$data->id_tipo_usuario;
$funcion=$data->funcion;
if (strcasecmp($funcion, "Login") == 0) {
    $run=$data->run;
    $contrasenia=$data->contrasenia;
    Login($run,$contrasenia,$conecta);
}
function CreateUsuario($id,$run,$nombre,$apellido_paterno,$apellido_materno,$id_tipo_usuario,$contrasenia)
{
    $query =" select 1 FROM usuario WHERE id='".$id."'";
    $existe=mysqli_query($conecta,$query);
    if(existe){
    	$query = "UPDATE usuario SET  run='".$run."', nombre='".$nombre."', apellido_paterno='".$apellido_paterno."',apellido_materno='".$apellido_materno."',id_tipo_usuario='".$id_tipo_usuario."',contrasenia='".$contrasenia."' ,estado='".$estado."' where id='".$id."'";
    }else{
    	$query = "INSERT INTO usuario VALUES('','".$run."','".$nombre."','".$apellido_paterno."','".$apellido_materno."','".$id_tipo_usuario."','".$contrasenia."','".$estado."')";
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
    $query ="DELETE FROM usuario WHERE id='".$id."'";
$resultado=mysqli_query($conecta,$query);
mysqli_close();
return $resultado;
}
function DeshabilitaUserById($id)
{
    $query = "UPDATE usuario SET estado='Deshabilitado' where id='".$id."'";
$resultado=mysqli_query($conecta,$query);
$myArray=array();
 while ($evento = mysqli_fetch_assoc($resultado)) {
	$myArray[]= $evento;
}
echo json_encode($myArray);
mysqli_close($conecta);
}
function findUserById($id)
{
    $query ="select * FROM usuario WHERE id='".$id."'";
$resultado=mysqli_query($conecta,$query);
$myArray=array();
 while ($evento = mysqli_fetch_assoc($resultado)) {
	$myArray[]= $evento;
}
echo json_encode($myArray);
mysqli_close($conecta);
}

function Login($run,$contrasenia,$conecta)
{
    $query ="select * FROM usuario WHERE run='".$run."' and contrasenia='".$contrasenia."' and estado='Habilitado'";
$resultado=mysqli_query($conecta,$query);
$myArray=array();
 while ($evento = mysqli_fetch_assoc($resultado)) {
	$myArray[]= $evento;
}
echo json_encode($myArray);
mysqli_close($conecta);
}


?>

