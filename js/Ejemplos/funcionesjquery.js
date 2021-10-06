//Funcion para dibujar la tabla
function pintarRespuesta(items) {  
    
    //Definir encabezados de la tabla
    var tabla = `<table border="1"> 
                <tr> 
                <th colspan="2">ACCIONES</th> 
                <th>ID</th> 
                <th>NOMBRE</th> 
                <th>MARCA</th> 
                <th>MODELO</th> 
                <th>ID_CATEGORIA</th> </tr>`;
    
    //Recorrer los elementos del arreglo y retornarlos en la tabla
    for (var i=0; i < items.length; i++) {
        tabla += `<tr>
                    <th><button onclick='editarElemento(${items[i].id})'>Editar</button></th>
                    <th><button onclick='borrarInformacion(${items[i].id})'>Borrar</button></th>
                    <th>${items[i].id}</th>
                    <th>${items[i].name}</th>
                    <th>${items[i].brand}</th>
                    <th>${items[i].model}</th>
                    <th>${items[i].category_id}</th>
                    </tr>`;
    }
    tabla += '</table>';

    $("#listado").append(tabla);
}

//Funcion para consulta usando Ajax y JQuery
function mostrarInformacion() {  
    $.ajax({

        url : 'https://gf255a7993b1618-bdclientes.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/clientes/clientes', 
        type : 'GET', 
        dataType : 'json', 

        // código a ejecutar si la petición es satisfactoria;
        success : function(respuesta) {
            console.log(respuesta); //Esta instrucción permite ver en la consola del navegador la información contenida en respuesta.
            pintarRespuesta(respuesta.items);
        },

        // código a ejecutar si la petición falla;
        error : function(xhr, status) {
            alert('Ha sucedido un problema');
        },
        
        // código a ejecutar sin importar si la petición falla o no
        complete : function(xhr, status) {
            alert('Ejecutando petición');
        }
    });
}

//Funcion para guardar información usando Ajax y JQuery
function guardarInformacion() {  
    var myData={
        id:$("#id").val(),
        name:$("#name").val(),
        brand:$("#brand").val(),
        model:$("#model").val(),
        category_id:$("#category_id").val(),
    };

    var dataToSend=JSON.stringify(myData);

    $.ajax({
        url : 'https://gf255a7993b1618-bdclientes.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/clientes/clientes', 
        type : 'POST', 
        data: myData,
        dataType : 'JSON', 

        success : function(respuesta) {
            $("resultado").empty();
            $("#id").val("");
            $("#name").val("");
            $("#brand").val("");
            $("#model").val("");
            $("#category_id").val("");
            mostrarInformacion();
            alert("Información guardada")
        },

        error : function(xhr, status) {
            alert('Ha sucedido un problema');
        }
    });
}

function borrarInformacion(idRegistro) {  
    var myData={
        id:idRegistro
    };

    var dataToSend=JSON.stringify(myData);

    $.ajax({
        url : 'https://gf255a7993b1618-bdclientes.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/clientes/clientes', 
        type : 'DELETE', 
        data: myData,
        dataType : 'JSON', 
        contentType: "application/json",

        success : function(respuesta) {
            $("resultado").empty();
            mostrarInformacion();
            alert("Registro Eliminado")
        },

        error : function(xhr, status) {
            alert('Ha sucedido un problema');
        }
    });
}