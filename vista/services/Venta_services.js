'use strict';

app.factory('VentaService', ['$http', '$q',
     function($http, $q){ 
    var factory = {
            CreateVenta:CreateVenta,
            findAllVenta:findAllVenta,
            DeleteVentaById:DeleteVentaById,
            ModificarStock:ModificarStock
    };

    return factory;
    function CreateVenta(valores){
       valores.funcion="CreateVENTA";
    var REST_SERVICE_URI = 'http://'+window.location.host+'/';        
        var deferred = $q.defer();
        $http.post(REST_SERVICE_URI+"ProyectoFerreteria/persistencia/mantenedorVenta.php",valores)
        .then(
            function (response) {
                console.log(response);
                deferred.resolve(response.data);
            },
            function(errResponse){
                console.error('Error Guardando');
                deferred.reject(errResponse);
            }

        );
        return deferred.promise;
    }

    function findAllVenta(valores){
        var valores={};
       valores.funcion="findAllVENTA";
    var REST_SERVICE_URI = 'http://'+window.location.host+'/';        
        var deferred = $q.defer();
        $http.post(REST_SERVICE_URI+"ProyectoFerreteria/persistencia/mantenedorVenta.php",valores)
        .then(
            function (response) {
                console.log(response);
                deferred.resolve(response.data);
            },
            function(errResponse){
                console.error('Error Buscando');
                deferred.reject(errResponse);
            }

        );
        return deferred.promise;
    }
     function DeleteVentaById(valores){
       valores.funcion="DeleteCATEGORIA_VentaById";
    var REST_SERVICE_URI = 'http://'+window.location.host+'/';        
        var deferred = $q.defer();
        $http.post(REST_SERVICE_URI+"ProyectoFerreteria/persistencia/mantenedorVenta.php",valores)
        .then(
            function (response) {
                console.log(response);
                deferred.resolve(response.data);
            },
            function(errResponse){
                console.error('Error Buscando');
                deferred.reject(errResponse);
            }

        );
        return deferred.promise;
    }
    function ModificarStock(valores){
       valores.funcion="ModificarStock";
    var REST_SERVICE_URI = 'http://'+window.location.host+'/';        
        var deferred = $q.defer();
        $http.post(REST_SERVICE_URI+"ProyectoFerreteria/persistencia/mantenedorVenta.php",valores)
        .then(
            function (response) {
                console.log(response);
                deferred.resolve(response.data);
            },
            function(errResponse){
                console.error('Error Buscando');
                deferred.reject(errResponse);
            }

        );
        return deferred.promise;
    }
    


}]);