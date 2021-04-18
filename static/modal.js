function mostrarErroresCreacion(errores) {
    $(errores).html("");
    let error = "";
    for (let item in errores.responseJSON.error) {
        error += '<div class="alert alert-danger" <strong>' + errores.responseJSON[item] + '</strong></div>';
    }
    $('$errores').append(error);
}

function notificacionError(mensaje) {

    Swal.fire({
        position: 'center',
        icon: 'warning',
        title: mensaje,
        showConfirmButton: false,
        timer: 3000
    });

}

function notificacionSuccess(mensaje) {
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: mensaje,
        showConfirmButton: false,
        timer: 3000
    });

}

function activarBoton() {
    if ($('#boton_creacion').prop('disable')) {
        $('#boton_creacion').prop(('disable', false));
    } else {
        $('#boton_creacion').prop(('disable', true));
    }
}


function cerrar_modal_editar() {
    $('#editar_modal').modal('hide');
}

function cerrar_modal_eliminar() {
    $('#eliminar_modal').modal('hide');
}

function cerrar_modal_reactor() {
    $('#reactor_modal').modal('hide');
}

function abrir_modal_eliminar(url) {
    $('#eliminar_modal').load(url, function () {
        $(this).modal('show');
    });
}

function abrir_modal_editar(url) {
    $('#editar_modal').load(url, function () {
        $(this).modal('show');
    });
}


function abrir_modal_reactor(url) {
    $('#reactor_modal').load(url, function () {
        $(this).modal('show');
    });
}



