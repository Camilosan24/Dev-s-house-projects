/**Jquery */

$(document).ready(function () {

    /**VARIABLES */
    var manualUsuario = $("#manualUsuario");

    var contactos = $("#contacto");

    var informacion = $("#informacionDrum");

    var botonInformacion= $("#btnInformacionDrum");

    var botonManual= $("#btnManual");

    var botonAcercaDe= $("#btnContactos");

    var videoYoutube= $("#youtube");

    var redesSociales= $("#redSocial");

    var botonJugar = $("#btnJugar");

    var btnInicio= $("#inicio");

    var limpiar= $("btnLimpiar");

    var limpiarFormulario= $("#btnLimpiar");

    /**funciones... */

    contactos.hide();
    informacion.hide();
    manualUsuario.hide();

    botonInformacion.click(function () {
        console.log("Accion boton informacion");
        contactos.hide();
        manualUsuario.hide();
        videoYoutube.hide();
        informacion.show("slow");
        redesSociales.show();
        btnInicio.show();
    });

    botonManual.click(function () {
        console.log("Accion boton manual");
        contactos.hide();
        informacion.hide();
        videoYoutube.hide();
        manualUsuario.show("slow");
        redesSociales.show();
        btnInicio.show();
    });

    botonAcercaDe.click(function () {
        console.log("Accion boton contacto");
        contactos.show("slow");
        manualUsuario.hide();
        videoYoutube.hide();
        informacion.hide();
        redesSociales.hide();
        redesSociales.show();
        btnInicio.show();
    });

    botonJugar.click(function () {
        console.log("Accion boton Jugar");
        contactos.hide();
        manualUsuario.hide();
        videoYoutube.hide();
        informacion.hide();
        redesSociales.hide();
    });

    btnInicio.click(function () {
        console.log("Accion boton inicio");
        contactos.hide();
        manualUsuario.hide();
        videoYoutube.show();
        informacion.hide();
        redesSociales.show();
    });

});

