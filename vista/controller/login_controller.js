'use strict'   
app.controller('LoginController', ['$scope','$sessionStorage','UsuarioService',
    function($scope,$sessionStorage,UsuarioService) {
    if ($sessionStorage.SessionMessage==null || $sessionStorage.SessionMessage==undefined || $sessionStorage.SessionMessage==""){
    $sessionStorage.SessionMessage={};
    }
    
    $scope.Ingresar=function(){
			var valores={};
			valores.run=$scope.run;
			valores.contrasenia=$scope.contrasena;
			valores.funcion="Login";
            UsuarioService.Login(valores)
    		.then(
                function(dataUsuario){
                console.log(dataUsuario);
    			if (dataUsuario==""){
    				alert("Usuario Incorrecto");
    			}else{
                    $sessionStorage.SessionMessage.TIPO_USUARIO_id=dataUsuario[0].TIPO_USUARIO_id;
                    $sessionStorage.SessionMessage.nombre=dataUsuario[0].nombre;
                    $sessionStorage.SessionMessage.apellido_paterno=dataUsuario[0].apellido_paterno;
                    window.location = 'http://' + window.location.host + '/ProyectoFerreteria/vista/vistas/Principal.html';
    			}
    		}, function(errResponse){
    			 console.log("Problemas al logear");
    		});
	}
}]);
