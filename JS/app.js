const usuarioDigital = {
    nombre: '',
    edad: '',
    pais: '',
    motivo: '',
    suscripcion: ''
}
function guardarDatos() {
    try {
        const { value: nombre } = document.getElementById('nombre');
        const { value: edad } = document.getElementById('edad');
        const { value: pais } = document.getElementById('pais');
        const { value: motivo } = document.getElementById('motivo');
        const { value: suscripcion } = document.getElementById('suscripcion');        
        if (!nombre || !edad || isNaN(edad) || edad < 18 || edad > 120 || !pais || !motivo || !suscripcion) {
            Swal.fire("Por favor complete todos los campos y asegúrese de que tiene más de 18 años y que la edad es válida.");
            return;
        }
        usuarioDigital.nombre = nombre;
        usuarioDigital.edad = edad;
        usuarioDigital.pais = pais;
        usuarioDigital.motivo = motivo;
        usuarioDigital.suscripcion = suscripcion;
        try {
            localStorage.setItem('usuarioDigital', JSON.stringify(usuarioDigital));
        } catch (e) {
            console.error("Error al guardar en localStorage:", e);
            Swal.fire("Ocurrió un problema al guardar los datos. Inténtelo de nuevo más tarde.");
            return;
        }
        document.getElementById('resultado').innerHTML = `
            <h2>Datos Guardados:</h2>
            <p>Nombre: ${usuarioDigital.nombre}</p>
            <p>Edad: ${usuarioDigital.edad}</p>
            <p>País: ${usuarioDigital.pais}</p>
            <p>Motivo: ${obtenerMotivo(usuarioDigital.motivo)}</p>
            <p>Suscripción: ${obtenerSuscripcion(usuarioDigital.suscripcion)}</p>
        `;
        Swal.fire({
            title: "Datos guardados",
            text: "Gracias por participar en nuestra encuesta!",
            icon: "success"
        });
    } catch (e) {
        console.error("Error al guardar los datos:", e);
        Swal.fire("Ocurrió un error inesperado. Por favor, inténtelo nuevamente.");
    }
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
function alertEncuesta(){
    Swal.fire("Por favor considere completar la encuesta más abajo");
}