$(document).ready(function () {
    //Instrucciones que se ejecutan cuando se carga la página
});

function pintarRespuesta(items) {  
    
    //Definir encabezados de la tabla
    var tabla = `<table border="1"> 
                <tr> 
                <th colspan="2">ACCIONES</th> 
                <th>NOMBRE</th> 
                <th>MARCA</th> 
                <th>MODELO</th> 
                <th>ID_CATEGORIA</th> </tr>`;
    
    //Recorrer los elementos del arreglo y retornarlos en la tabla
    for (var i=0; i < items.length; i++) {
        tabla += `<tr>
                    <th><a href=${items[i].id}>Editar</th>
                    <th><a href=${items[i].id}>Eliminar</th>
                    <th>${items[i].name}</th>
                    <th>${items[i].brand}</th>
                    <th>${items[i].model}</th>
                    <th>${items[i].category_id}</th>
                    </tr>`;
    }
    tabla += '</table>';

    $("#listado").append(tabla);
}

function ejecutarws() {  
    $.ajax({

        //url : 'api/servicio', La URL para la petición
        //data : { id : 123 }, La información a enviar
        //type : 'GET', Especifica el tipo de petición HTTP(GET, POST, PUT o DELETE)
        //dataType : 'json', El tipo de información que se espera obtener como respuesta
        //contentType: "application/json", Tipo de encabezado de la respuesta que se espera obtener

        url : 'https://gf255a7993b1618-bdclientes.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/clientes/clientes', 
        type : 'GET', 
        dataType : 'json', 

        // código a ejecutar si la petición es satisfactoria;
        success : function(respuesta) {
            console.log(respuesta);
            pintarRespuesta(respuesta.items);
        },

        // código a ejecutar si la petición falla;
        error : function(xhr, status) {
            alert('Ha sucedido un problema');
        },
        // código a ejecutar sin importar si la petición falló o no
        complete : function(xhr, status) {
            alert('Ejecutando petición');
        }
    });
}