<?php
function CreateUsuario($id,$run,$nombre,$apellido_paterno,$apellido_materno,$id_tipo_usuario,$contrasenia)
{
	require ("Conecta.php");
    $query =" select 1 FROM usuario WHERE id='".$id."'";
    $existe=mysql_query($query);
    if(existe){
    	$query = "UPDATE usuario SET  run='".$run."', nombre='".$nombre."', apellido_paterno='".$apellido_paterno."',apellido_materno='".$apellido_materno."',id_tipo_usuario='".$id_tipo_usuario."',contrasenia='".$contrasenia."' ,estado='".$estado."' where id='".$id."'";
    }else{
    	$query = "INSERT INTO usuario VALUES('','".$run."','".$nombre."','".$apellido_paterno."','".$apellido_materno."','".$id_tipo_usuario."','".$contrasenia."','".$estado."')";
    }
    
	$resultado=$mysql_query($query);
mysql_close();
return $resultado;
}

function DeleteUserById($id)
{
	require ("Conecta.php");
    $query ="DELETE FROM usuario WHERE id='".$id."'";
$resultado=$mysql_query($query);
mysql_close();
return $resultado;
}
function DeshabilitaUserById($id)
{
	require ("Conecta.php");
    $query = "UPDATE usuario SET estado='Deshabilitado' where id='".$id."'";
$resultado=$mysql_query($query);
mysql_close();
return $resultado;
}
function findUserById($id)
{
	require ("Conecta.php");
    $query ="select * FROM usuario WHERE id='".$id."'";
$resultado=$mysql_query($query);
mysql_close();
return $resultado;
}
function Login($run,$contrasenia)
{
	require ("Conecta.php");
    $query ="select * FROM usuario WHERE run='".$run."' and contrasenia='".$contrasenia."' and estado='Habilitado'";
$resultado=$mysql_query($query);
mysql_close();
return $resultado;
}


?>

