'use strict';

app.factory('ProductoService', ['$http', '$q',
     function($http, $q){ 
    var factory = {
            CreateProducto:CreateProducto,
            findAllProducto:findAllProducto,
            DeleteProductoById:DeleteProductoById,
            ModificarStock:ModificarStock
    };

    return factory;
    function CreateProducto(valores){
       valores.funcion="CreateProducto";
    var REST_SERVICE_URI = 'http://'+window.location.host+'/';        
        var deferred = $q.defer();
        $http.post(REST_SERVICE_URI+"ProyectoFerreteria/persistencia/mantenedorProducto.php",valores)
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

    function findAllProducto(valores){
        var valores={};
       valores.funcion="findAllProducto";
    var REST_SERVICE_URI = 'http://'+window.location.host+'/';        
        var deferred = $q.defer();
        $http.post(REST_SERVICE_URI+"ProyectoFerreteria/persistencia/mantenedorProducto.php",valores)
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
     function DeleteProductoById(valores){
       valores.funcion="DeleteCATEGORIA_ProductoById";
    var REST_SERVICE_URI = 'http://'+window.location.host+'/';        
        var deferred = $q.defer();
        $http.post(REST_SERVICE_URI+"ProyectoFerreteria/persistencia/mantenedorProducto.php",valores)
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
        $http.post(REST_SERVICE_URI+"ProyectoFerreteria/persistencia/mantenedorProducto.php",valores)
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