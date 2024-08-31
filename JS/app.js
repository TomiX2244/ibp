let nombreUsuario;
let edadUsuario;
let paisUsuario;
const usuarioDigital = {
    nombre: nombreUsuario,
    edad: edadUsuario,
    pais: paisUsuario,
};
let usuarioSuscripcion = ['standard', 'deluxe', 'gold', 'free'];
let usuarioSuscricionPago = usuarioSuscripcion.filter(suscripcion => suscripcion != 'free');

function preguntaUsuario() {
    usuarioDigital.nombre = prompt('Ingresar nombre');
    usuarioDigital.edad = prompt('Ingresar edad');
    if (usuarioDigital.edad >= 18) {
        alert('Bienvenido a la pagina, ' + usuarioDigital.nombre + '!');
    } else {
        alert('No puede ingresar a la pagina, debe ser mayor de edad');
    }
}
function encuestaPais() {
    usuarioDigital.pais = prompt("Por favor indique desde qué parte del mundo está accediendo a nuestra página: \n América del Norte \n América del Sur \n Europa \n Asia \n África \n Oceanía");
    paisopciones();
}
function paisopciones() {
    if (['America del Norte', 'America del Sur', 'Europa', 'Oceania', 'Asia', 'Africa'].includes(usuarioDigital.pais)) {
        alert("Gracias por visitar nuestro sitio web desde " + usuarioDigital.pais);
    } else {
        alert('Debe ingresar una opción válida');
    }
}
function encuestaMotivo() {
    usuarioDigital.motivo = prompt('¿Cómo llegó usted a nuestra página web? \n 1: Por recomendación de alguien cercano \n 2: Por publicidad en Internet \n 3: Por buscarlo en Internet por mi cuenta \n 4: Terminar');
    if (usuarioDigital.motivo == 1) {
        prompt('Así como le han recomendado el sitio, ¿se lo recomendará a alguien más?');
        alert('Muchas gracias por su tiempo');
    }
    if (usuarioDigital.motivo == 2) {
        prompt('¿En qué sitio ha encontrado nuestra publicidad?');
        alert('Muchas gracias por su tiempo');
    }
    if (usuarioDigital.motivo == 3) {
        prompt('¿Qué motor de búsqueda utilizó para encontrar nuestro sitio? Ej: Google, Firefox');
        alert('Muchas gracias por su tiempo');
    }
}
function encuestaSuscripcion() {
    usuarioSuscripcion = prompt('¿Ha contratado uno de nuestros planes? De ser así, indique cuál \n 1: He comprado el plan standard \n 2: He comprado el plan deluxe \n 3: He comprado el plan gold \n 4: No he comprado ningún plan');
    if (usuarioSuscripcion == 1) {
        console.log('Usuario: Plan Standard');
    }
    if (usuarioSuscripcion == 2) {
        console.log('Usuario: Plan Deluxe');
    }
    if (usuarioSuscripcion == 3) {
        console.log('Usuario: Plan Gold');
    }
    if (usuarioSuscripcion == 4) {
        console.log('Usuario: Plan Gratuito');
    }
    if (usuarioSuscricionPago.length > 0) {
        console.log('Usuario de Pago');
    }
}
function encuestaSuscripcionPrecio() {
    let encuestaSuscripcionPrecioInicial = prompt('¿Cuanto ha costado inicialmente la suscripción?')
    let encuestaSuscripcionPrecioFinal = (encuestaSuscripcionPrecioInicial * 1.21)
    alert('El precio tras impuestos es de $' + encuestaSuscripcionPrecioFinal)
}

preguntaUsuario()
alert('Usted ha sido elegido para llevar a cabo una encuesta, por favor responda las siguientes preguntas:')
encuestaPais()
encuestaMotivo()
encuestaSuscripcion()
encuestaSuscripcionPrecio()