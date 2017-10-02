'use strict'
app.controller('PrincipalController', ['$scope','$sessionStorage',
    function($scope,$sessionStorage) {
   	$scope.dataUsuario=$sessionStorage.SessionMessage;
    //Metodos llamados desde la grafica
    $scope.cerrarSesion=function(){
        $sessionStorage.SessionMessage={};
        console.log($sessionStorage.SessionMessage);
        window.location = 'http://' + window.location.host + '/ProyectoFerreteria/vista/vistas/Login.html';
    }

}]);