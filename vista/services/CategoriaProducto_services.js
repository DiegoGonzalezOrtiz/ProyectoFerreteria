'use strict';

app.factory('CategoriaProductoService', ['$http', '$q',
     function($http, $q){ 
    var factory = {
            saveCategoriaProducto:saveCategoriaProducto,
            findAllCATEGORIA_Producto:findAllCATEGORIA_Producto,
            DeleteCATEGORIA_ProductoById:DeleteCATEGORIA_ProductoById
    };

    return factory;
    function saveCategoriaProducto(valores){
       valores.funcion="saveCategoriaProducto";
    var REST_SERVICE_URI = 'http://'+window.location.host+'/';        
        var deferred = $q.defer();
        $http.post(REST_SERVICE_URI+"ProyectoFerreteria/persistencia/mantenedorCategoriaProducto.php",valores)
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

    function findAllCATEGORIA_Producto(valores){
        var valores={};
       valores.funcion="findAllCATEGORIA_Producto";
    var REST_SERVICE_URI = 'http://'+window.location.host+'/';        
        var deferred = $q.defer();
        $http.post(REST_SERVICE_URI+"ProyectoFerreteria/persistencia/mantenedorCategoriaProducto.php",valores)
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
     function DeleteCATEGORIA_ProductoById(valores){
       valores.funcion="DeleteCATEGORIA_ProductoById";
    var REST_SERVICE_URI = 'http://'+window.location.host+'/';        
        var deferred = $q.defer();
        $http.post(REST_SERVICE_URI+"ProyectoFerreteria/persistencia/mantenedorCategoriaProducto.php",valores)
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