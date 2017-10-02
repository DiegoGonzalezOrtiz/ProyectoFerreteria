<?php
	$servidor='localhost';
	$usuario='root';
	$clave='avaras08';
	$basedatos='mydb';
	$conecta=@mysql_connect($servidor,$usuario,$clave) or die ("error:no hay conexion al servidor");
	mysql_select_db ($basedatos);
	date_default_timezone_set('america/santiago');
	mysql_query ("set names 'utf8'");
?>