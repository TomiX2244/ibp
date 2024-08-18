let nombreUsuario
let edadUsuario
let paisUsuario
const usuarioDigital = {
    nombre: nombreUsuario,
    edad: edadUsuario,
    pais: paisUsuario,
}
function preguntaUsuario() {
    usuarioDigital.nombreUsuario = prompt('Ingresar nombre')
    usuarioDigital.edadUsuario = prompt('Ingresar edad')
    if (usuarioDigital.edadUsuario >= 18){
        alert('Bienvenido a la pagina, ' + usuarioDigital.nombreUsuario + '!')
    } else{
        alert('No puede ingresar a la pagina, debe ser mayor de edad')
    }
}
function encuestaPais() {
    usuarioDigital.paisUsuario = prompt("Por favor indique desde que parte del mundo esta accediendo a nuestra pagina: \n America del Norte \n  America del Sur \n  Europa \n  Asia \n  Africa \n  Oceania")
    paisopciones()
}
function paisopciones() {
    if ((usuarioDigital.paisUsuario === 'America del Norte' || 
        usuarioDigital.paisUsuario === 'America del Sur' || 
        usuarioDigital.paisUsuario === 'Europa' || 
        usuarioDigital.paisUsuario === 'Oceania' || 
        usuarioDigital.paisUsuario === 'Asia' || 
        usuarioDigital.paisUsuario === 'Africa')) {
        alert("Gracias por visitar nuestro sitio web desde "+ usuarioDigital.paisUsuario)
    } else {
        alert('Debe ingresar una opción válida')
    }
}
function encuestaMotivo() {
    usuarioDigital.motivo = prompt('¿Como llego usted a nuestra pagina web? \n 1: Por recomendacion de alguien cercano \n 2: Por publicidad en Internet \n 3: Por buscarlo en Internet por mi cuenta \n 4: Terminar')
        if (usuarioDigital.motivo == 1) {
            prompt('Asi como le han recomendado el sitio, ¿se lo recomendara a alguien más?')
            alert('Muchas gracias por su tiempo')
        }
        if (usuarioDigital.motivo == 2) {
            prompt('¿En que sitio ha encontrado nuestra publicidad?')
            alert('Muchas gracias por su tiempo')
        }
        if (usuarioDigital.motivo == 3) {
            prompt('¿Que motor de busqueda utilizó para encontrar nuestro sitio? Ej: Google, Firefox')
            alert('Muchas gracias por su tiempo')
        }
    }

preguntaUsuario()
alert('Usted ha sido elegido para llevar a cabo una encuesta, por favor responda las siguientes preguntas:')
encuestaPais()
encuestaMotivo()