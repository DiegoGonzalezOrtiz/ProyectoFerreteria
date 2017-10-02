'use strict';

app.factory('DetalleVentaService', ['$http', '$q',
     function($http, $q){ 
    var factory = {
            CreateDetalleVenta:CreateDetalleVenta,
            findAllDetalleVenta:findAllDetalleVenta,
            DeleteDetalleVentaById:DeleteDetalleVentaById,
            ModificarStock:ModificarStock
    };

    return factory;
    function CreateDetalleVenta(valores){
       valores.funcion="Createdetalle_venta";
    var REST_SERVICE_URI = 'http://'+window.location.host+'/';        
        var deferred = $q.defer();
        $http.post(REST_SERVICE_URI+"ProyectoFerreteria/persistencia/mantenedorDetalleVenta.php",valores)
        .then(
            function (response) {
                deferred.resolve(response.data);
            },
            function(errResponse){
                console.error('Error Guardando');
                deferred.reject(errResponse);
            }

        );
        return deferred.promise;
    }

    function findAllDetalleVenta(valores){
        var valores={};
       valores.funcion="findAllDetalleVenta";
    var REST_SERVICE_URI = 'http://'+window.location.host+'/';        
        var deferred = $q.defer();
        $http.post(REST_SERVICE_URI+"ProyectoFerreteria/persistencia/mantenedorDetalleVenta.php",valores)
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
     function DeleteDetalleVentaById(valores){
       valores.funcion="DeleteCATEGORIA_DetalleVentaById";
    var REST_SERVICE_URI = 'http://'+window.location.host+'/';        
        var deferred = $q.defer();
        $http.post(REST_SERVICE_URI+"ProyectoFerreteria/persistencia/mantenedorDetalleVenta.php",valores)
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
        $http.post(REST_SERVICE_URI+"ProyectoFerreteria/persistencia/mantenedorDetalleVenta.php",valores)
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