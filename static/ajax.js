var $ = jQuery.noConflict();

$(document).ready(function () {
    listarUsuario()
    listarTipo()
    listarBatch()
    listarOrganismo()
    listarReactor()
});

function listarUsuario() {
    $.ajax({
        url: "/ProsPy/UsuarioLista/",
        type: "get",
        dataType: "json",
        success: function (response) {
            if ($.fn.DataTable.isDataTable('#tablausuario')) {
                $('#tablausuario').DataTable().destroy();
            }
            $('#tablausuario tbody').html("");
            for (let i = 0; i < response.length; i++) {
                let fila = '<tr>';
                fila += '<td>' + (i + 1) + '</td>>';
                fila += '<td>' + response[i]["fields"]['username'] + '</td>>';
                fila += '<td>' + response[i]["fields"]['first_name'] + '</td>>';
                fila += '<td>' + response[i]["fields"]['last_name'] + '</td>>';
                fila += '<td>' + response[i]["fields"]['email'] + '</td>>';
                fila += '<td>' + response[i]["fields"]['is_superuser'] + '</td>>';
                fila += '<td>' + response[i]["fields"]['last_login'] + '</td>>';
                fila += '<td><button type="button" class="btn btn-primary btn-xs" onclick="abrir_modal_editar(\'/ProsPy/EditarUsuario/' + response[i]['pk'] + '/\');"><i class="fa fa-pencil"></i></button> <button type="button" class="btn btn-danger btn-xs" onclick="abrir_modal_eliminar(\'/ProsPy/EliminarUsuario/' + response[i]['pk'] + '/\');"><i class="fa fa-trash-o "></i></button></td>>';
                fila += '</tr>';
                $('#tablausuario tbody').append(fila);
            }
            $('#tablausuario').DataTable({
                "responsive": true,
                "lengthChange": false,
                "autoWidth": false,
                "buttons": ["copy", "csv", "excel", "pdf", "print"],
                "paging": true,
                "ordering": true,
                "info": true,
            }).buttons().container().appendTo('#tablausuario_wrapper .col-md-6:eq(0)');
        }, error: function (error) {
            console.log(error);

        }
    });
}

function registrar() {
    $.ajax({
        data: $('#form_crear').serialize(),
        url: $('#form_crear').attr('action'),
        type: $('#form_crear').attr('method'),
        success: function (response) {
            notificacionSuccess(response.mensaje);
            cerrar_modal_crear();
        },
        error: function (error) {
            notificacionError(error.responseJSON.mensaje);
            mostrarErroresCreacion(error);
        }
    });
}

function editar() {
    $.ajax({
        data: $('#form_editar').serialize(),
        url: $('#form_editar').attr('action'),
        type: $('#form_editar').attr('method'),
        success: function (response) {
            notificacionSuccess(response.mensaje);
            listarUsuario();
            cerrar_modal_editar();
        },
        error: function (error) {
            notificacionError(error.responseJSON.mensaje);
            mostrarErroresCreacion(error);
            activarBoton();
        }
    });
}

function eliminar(pk) {
    $.ajax({
        data: {
            csrfmiddlewaretoken: $("[name='csrfmiddlewaretoken']").val()
        },
        url: '/ProsPy/EliminarUsuario/' + pk + '/',
        type: 'post',
        success: function (response) {
            notificacionSuccess(response.mensaje);
            listarUsuario();
            cerrar_modal_eliminar();
        },
        error: function (error) {
            notificacionError(error.responseJSON.mensaje);
        }
    });
}

function listarTipo() {
    $.ajax({
        url: "/ProsPy/TipoReactor/",
        type: "get",
        dataType: "json",
        success: function (response) {
            if ($.fn.DataTable.isDataTable('#tablatipo')) {
                $('#tablatipo').DataTable().destroy();
            }
            $('#tablatipo tbody').html("");
            console.log(response)
            for (let i = 0; i < response.length; i++) {
                let fila = '<tr>';
                fila += '<td>' + (i + 1) + '</td>>';
                fila += '<td>' + response[i]["fields"]['descripcion'] + '</td>>';
                fila += '<td>' + response[i]["fields"]['especificaciontecnica'] + '</td>>';
                fila += '<td>' + response[i]["fields"]['tiporeactor'] + '</td>>';
                fila += '<td><button type="button" class="btn btn-primary btn-xs" onclick="abrir_modal_editartiporeactor(\'/ProsPy/EditarTipoReactor/' + response[i]['pk'] + '/\');"><i class="fa fa-pencil"></i></button> <button type="button" class="btn btn-danger btn-xs" onclick="abrir_modal_eliminar(\'/ProsPy/EliminarUsuario/' + response[i]['pk'] + '/\');"><i class="fa fa-trash-o "></i></button></td>>';
                fila += '</tr>';
                $('#tablatipo tbody').append(fila);
            }
            $('#tablatipo').DataTable({
                "responsive": true,
                "lengthChange": false,
                "autoWidth": false,
                "buttons": ["copy", "csv", "excel", "pdf", "print"],
                "paging": true,
                "ordering": true,
                "info": true,
            }).buttons().container().appendTo('#tablatipo_wrapper .col-md-6:eq(0)');
        }, error: function (error) {
            console.log(error);

        }
    });
}

function listarOrganismo() {
    $.ajax({
        url: "/ProsPy/Organismo/",
        type: "get",
        dataType: "json",
        success: function (response) {
            if ($.fn.DataTable.isDataTable('#tablaorganismo')) {
                $('#tablaorganismo').DataTable().destroy();
            }
            $('#tablaorganismo tbody').html("");
            for (let i = 0; i < response.length; i++) {
                let fila = '<tr>';
                fila += '<td>' + (i + 1) + '</td>>';
                fila += '<td>' + response[i]["fields"]['nombrecientifico'] + '</td>>';
                fila += '<td>' + response[i]["fields"]['genero'] + '</td>>';
                fila += '</tr>';
                $('#tablaorganismo tbody').append(fila);
            }
            $('#tablaorganismo').DataTable({
                "responsive": true,
                "lengthChange": false,
                "autoWidth": false,
                "buttons": ["copy", "csv", "excel", "pdf", "print"],
                "paging": true,
                "ordering": true,
                "info": true,
            }).buttons().container().appendTo('#tablaorganismo_wrapper .col-md-6:eq(0)');
        }, error: function (error) {
            console.log(error);

        }
    });
}

function listarReactor() {
    $.ajax({
        url: "/ProsPy/Reactor/",
        type: "get",
        dataType: "json",
        success: function (response) {
            if ($.fn.DataTable.isDataTable('#tablareactor')) {
                $('#tablareactor').DataTable().destroy();
            }
            $('#tablareactor tbody').html("");
            for (let i = 0; i < response.length; i++) {
                let fila = '<tr>';
                fila += '<td>' + (i + 1) + '</td>>';
                fila += '<td>' + response[i]["fields"]['marca'] + '</td>>';
                fila += '<td>' + response[i]["fields"]['modelo'] + '</td>>';
                fila += '<td>' + response[i]["fields"]['especificaciontecnica'] + '</td>>';
                fila += '<td>' + response[i]["fields"]['foto1'] + '</td>>';
                fila += '<td>' + response[i]["fields"]['foto2'] + '</td>>';
                fila += '<td>' + response[i]["fields"]['foto3'] + '</td>>';
                fila += '<td>' + response[i]["fields"]['foto4'] + '</td>>';
                fila += '<td>' + response[i]["fields"]['estado'] + '</td>>';
                fila += '<td>' + response[i]["fields"]['tiporeactor'] + '</td>>';

                fila += '</tr>';
                $('#tablareactor tbody').append(fila);
            }
            $('#tablareactor').DataTable({
                "responsive": true,
                "lengthChange": false,
                "autoWidth": false,
                "buttons": ["copy", "csv", "excel", "pdf", "print"],
                "paging": true,
                "ordering": true,
                "info": true,
            }).buttons().container().appendTo('#tablareactor_wrapper .col-md-6:eq(0)');
        }, error: function (error) {
            console.log(error);

        }
    });
}


function listarBatch() {
    $.ajax({
        url: "/ProsPy/CaBatch/",
        type: "get",
        dataType: "json",
        success: function (response) {
            if ($.fn.DataTable.isDataTable('#tablabatch')) {
                $('#tablabatch').DataTable().destroy();
            }
            $('#tablabatch tbody').html("");
            for (let i = 0; i < response.length; i++) {
                let fila = '<tr>';
                fila += '<td>' + (i + 1) + '</td>>';
                fila += '<td>' + response[i]["fields"]['titulo'] + '</td>>';
                fila += '<td>' + response[i]["fields"]['descripcion'] + '</td>>';
                fila += '<td>' + response[i]["fields"]['y'] + '</td>>';
                fila += '<td>' + response[i]["fields"]['ks'] + '</td>>';
                fila += '<td>' + response[i]["fields"]['umax'] + '</td>>';
                fila += '<td>' + response[i]["fields"]['ms'] + '</td>>';
                fila += '<td>' + response[i]["fields"]['f'] + '</td>>';
                fila += '<td>' + response[i]["fields"]['t'] + '</td>>';
                fila += '<td>' + response[i]["fields"]['v0'] + '</td>>';
                fila += '<td>' + response[i]["fields"]['v'] + '</td>>';
                fila += '<td>' + response[i]["fields"]['vf'] + '</td>>';
                fila += '<td>' + response[i]["fields"]['so'] + '</td>>';
                fila += '<td>' + response[i]["fields"]['n'] + '</td>>';
                fila += '<td>' + response[i]["fields"]['x'] + '</td>>';
                fila += '<td>' + response[i]["fields"]['organismo'] + '</td>>';
                fila += '<td>' + response[i]["fields"]['reactor'] + '</td>>';
                fila += '<td>' + response[i]["fields"]['usuario'] + '</td>>';
                fila += '<td>' + response[i]["fields"]['usuario'] + '</td>>';
                fila += '</tr>';
                $('#tablabatch tbody').append(fila);
            }
            $('#tablabatch').DataTable({
                "responsive": true,
                "lengthChange": false,
                "autoWidth": false,
                "buttons": ["copy", "csv", "excel", "pdf", "print"],
                "paging": true,
                "ordering": true,
                "info": true,
            }).buttons().container().appendTo('#tablabatch_wrapper .col-md-6:eq(0)');
        }, error: function (error) {
            console.log(error);

        }
    });
}

function registrarcareactor() {
    $.ajax({
        data: $('#form_reactor').serialize(),
        url: $('#form_reactor').attr('action'),
        type: $('#form_reactor').attr('method'),

        success: function (response) {
            notificacionSuccess(response.mensaje);
            cerrar_modal_reactor();
        },
        error: function (error) {
            notificacionError(error.responseJSON.mensaje);
            mostrarErroresCreacion(error);
        }
    });
}


function editarcabatch() {
    $.ajax({
        data: $('#form_editar').serialize(),
        url: $('#form_editar').attr('action'),
        type: $('#form_editar').attr('method'),
        success: function (response) {
            notificacionSuccess(response.mensaje);
            listarBatch();
            cerrar_modal_editar();
        },
        error: function (error) {
            notificacionError(error.responseJSON.mensaje);
            mostrarErroresCreacion(error);
            activarBoton();
        }
    });
}

function eliminar(pk) {
    $.ajax({
        data: {
            csrfmiddlewaretoken: $("[name='csrfmiddlewaretoken']").val()
        },
        url: '/ProsPy/EliminarUsuario/' + pk + '/',
        type: 'post',
        success: function (response) {
            notificacionSuccess(response.mensaje);
            listarBatch();
            cerrar_modal_eliminar();
        },
        error: function (error) {
            notificacionError(error.responseJSON.mensaje);
        }
    });
}

function editartiporeactor() {
    $.ajax({
        data: $('#form_editar').serialize(),
        url: $('#form_editar').attr('action'),
        type: $('#form_editar').attr('method'),
        success: function (response) {
            notificacionSuccess(response.mensaje);
            listarTipo();
            cerrar_modal_editartiporeactor()
        },
        error: function (error) {
            notificacionError(error.responseJSON.mensaje);
            mostrarErroresCreacion(error);
        }
    });
}