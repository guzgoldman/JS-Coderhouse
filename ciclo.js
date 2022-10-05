// Ciclo

let contador = 3;

function pregunta() {
    let numero = parseInt(prompt("¿Cuanto es 25+25? Intentos restantes: "+contador))
    if (numero === 50) {
        alert("Respuesta correcta!")
    } else {
        alert("Respuesta incorrecta!")
        if (--contador > 0)
            pregunta()
    }
}

pregunta();


