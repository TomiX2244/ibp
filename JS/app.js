const usuarioDigital = {
    nombre: '',
    edad: '',
    pais: '',
    motivo: '',
    suscripcion: ''
}
function guardarDatos() {
    const nombre = document.getElementById('nombre').value;
    const edad = document.getElementById('edad').value;
    const pais = document.getElementById('pais').value;
    const motivo = document.getElementById('motivo').value;
    const suscripcion = document.getElementById('suscripcion').value;

    // Validaciones
    if (!nombre || !edad || edad < 18 || !pais || !motivo || !suscripcion) {
        alert('Por favor complete todos los campos y asegúrese de que tiene más de 18 años.');
        return;
    }
    usuarioDigital.nombre = nombre;
    usuarioDigital.edad = edad;
    usuarioDigital.pais = pais;
    usuarioDigital.motivo = motivo;
    usuarioDigital.suscripcion = suscripcion;
    localStorage.setItem('usuarioDigital', JSON.stringify(usuarioDigital));
    document.getElementById('resultado').innerHTML = `
        <h2>Datos Guardados:</h2>
        <p>Nombre: ${usuarioDigital.nombre}</p>
        <p>Edad: ${usuarioDigital.edad}</p>
        <p>País: ${usuarioDigital.pais}</p>
        <p>Motivo: ${obtenerMotivo(usuarioDigital.motivo)}</p>
        <p>Suscripción: ${obtenerSuscripcion(usuarioDigital.suscripcion)}</p>
    `
    Swal.fire({
        title: "Datos guardados",
        text: "Gracias por participar en nuestra encuesta!",
        icon: "success"
      });
    ;
}
function obtenerMotivo(motivo) {
    switch(motivo) {
        case '1':
            return 'Por recomendación de alguien cercano';
        case '2':
            return 'Por publicidad en Internet';
        case '3':
            return 'Por buscarlo en Internet por mi cuenta';
        default:
            return 'Desconocido';
    }
}
function obtenerSuscripcion(suscripcion) {
    switch(suscripcion) {
        case '1':
            return 'Plan Standard';
        case '2':
            return 'Plan Deluxe';
        case '3':
            return 'Plan Gold';
        case '4':
            return 'No he comprado ningún plan';
    }
}
function alertDatos(){
    Swal.fire({
        title: "Datos guardados",
        text: "Gracias por participar en nuestra encuesta!",
        icon: "success"
      });
}