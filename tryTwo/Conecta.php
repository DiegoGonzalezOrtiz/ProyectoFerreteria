<?php
	$servidor='localhost:3306';
	$usuario='root';
	$clave='hola123';
	$basedatos='mydb';
	$conecta=@mysqli_connect($servidor,$usuario,$clave) or die ("error:no hay conexion al servidor");
	mysqli_select_db ($conecta,$basedatos);
	date_default_timezone_set('america/santiago');
	mysqli_query ($conecta,"set names 'utf8'");
?>