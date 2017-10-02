var app = angular.module("myApp",['ngRoute','ngStorage']);
function require(url)
    {
    var ajax = new XMLHttpRequest();
    ajax.open('GET', url, false); // <-- the 'false' makes it synchronous
    ajax.onreadystatechange = function()
    {
        var script = ajax.response || ajax.responseText;
        if(ajax.readyState === 4)
        {
            switch(ajax.status)
            {
                case 200:
                    eval.apply(window, [script]);
                    //console.log("script loaded: ", url);
                    break;
                default:
                    console.log("ERROR: script not loaded: ", url);
            }
        }
    };
    ajax.send(null);
};
require('/ProyectoFerreteria/vista/libraries/ngStorage.min.js');
require('/ProyectoFerreteria/vista/controller/login_controller.js');
require('/ProyectoFerreteria/vista/controller/principal_controller.js');
require('/ProyectoFerreteria/vista/services/Usuario_services.js');
require('/ProyectoFerreteria/vista/controller/config.js');
require('/ProyectoFerreteria/vista/controller/categoriaProducto_controller.js');
require('/ProyectoFerreteria/vista/services/CategoriaProducto_services.js');
require('/ProyectoFerreteria/vista/controller/producto_controller.js');
require('/ProyectoFerreteria/vista/services/Producto_services.js');
require('/ProyectoFerreteria/vista/controller/venta_controller.js');
require('/ProyectoFerreteria/vista/services/Venta_services.js');
require('/ProyectoFerreteria/vista/controller/pagarVenta_controller.js');
require('/ProyectoFerreteria/vista/services/DetalleVenta_services.js');
require('/ProyectoFerreteria/vista/controller/Cuadratura_controller.js');







