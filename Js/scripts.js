$(document).ready(function() {
    // Función para cargar una vista parcial en el contenedor
    function cargarVistaParcial(vista) {
        $('#contenidoDinamico').load(vista);
    }

    // Evento de clic para cargar la vista de Alarmas
    $('#cargarAlarmas').click(function(e) {
        e.preventDefault();
        cargarVistaParcial('./alarmas.html');
    });

    // Evento de clic para cargar la vista de Medicamentos
    $('#cargarMedicamentos').click(function(e) {
        e.preventDefault();
        cargarVistaParcial('./medicamentos.html');
    });

    //Evento de clic para cargar la vista de crear alarmas
    $(document).on('click', '#btn-crear-alarmas', function(e) {
        e.preventDefault();
        $('#contenidoCrearAlarma').load('./agregarAlarma.html');
    });

    //Evento de clic para cargar la vista de crear medicamentos
    $(document).on('click', '#btn-crear-medicamento', function(e) {
        e.preventDefault();
        $('#contenidoCrearMedicamento').load('./agregarMedicamento.html');
    });    
  
});
