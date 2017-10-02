app.config(function($routeProvider) {

    $routeProvider
        .when('/Categoria', {
            templateUrl : 'CategoriaProducto.html',
            controller  : 'CategoriaProductoController'
        })
        .when('/Usuarios', {
            templateUrl : 'Usuario.html',
            controller  : 'aboutController'
        })
        .when('/Producto', {
            templateUrl : 'Producto.html',
            controller  : 'ProductoController'
        })
        .when('/BuscarVenta', {
            templateUrl : 'BuscarVenta.html',
            controller  : 'contactController'
        })
        .when('/Venta', {
            templateUrl : 'Venta.html',
            controller  : 'VentaController'
        })
        .when('/PagarVenta', {
            templateUrl : 'PagarVenta.html',
            controller  : 'PagarVentaController'
        })
        .when('/Cuadratura', {
            templateUrl : 'Cuadratura.html',
            controller  : 'CuadraturaController'
        })
        .otherwise({
            redirectTo: '/'
        });
});