$(document).ready(function() {
    // Función para cargar una vista parcial en el contenedor
    function cargarVistaParcial(vista) {
        $('#contenidoDinamico').load(vista);
    }

    // Evento de clic para cargar la vista de Alarmas
    $('#cargarAlarmas').click(function(e) {
        e.preventDefault();
        cargarVistaParcial('alarmas.html');
    });

    // Evento de clic para cargar la vista de Medicamentos
    $('#cargarMedicamentos').click(function(e) {
        e.preventDefault();
        cargarVistaParcial('medicamentos.html');
    });
});
