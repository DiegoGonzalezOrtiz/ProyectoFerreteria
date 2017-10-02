'use strict';

app.factory('UsuarioService', ['$http', '$q',
     function($http, $q){ 
    var factory = {
            Login:Login
    };

    return factory;
    function Login(valores){
    var REST_SERVICE_URI = 'http://'+window.location.host+'/';        
        var deferred = $q.defer();
        $http.post(REST_SERVICE_URI+"ProyectoFerreteria/persistencia/mantenedorUsuario.php",valores)
        .then(
            function (response) {
                console.log(response);
                deferred.resolve(response.data);
            },
            function(errResponse){
                console.error('Error Logeando');
                deferred.reject(errResponse);
            }

        );
        return deferred.promise;
    }



}]);