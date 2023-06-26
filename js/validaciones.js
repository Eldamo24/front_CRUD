let boton = document.getElementById("guardarAnime")
boton.disabled = true


const validarNumero = (input, div) => {
    let validNumber = /^[0-9]+$/
    let numeroValido = false
    if (input.value.length === 0) {
        div.innerHTML = "El campo no debe estar vacio"
        input.style.borderBlockColor = "red"
    } else if (!validNumber.test(input.value)) {
        div.innerHTML = "El campo debe incluir solo numeros"
        input.style.borderBlockColor = "red"
    }
    else {
        div.innerHTML = ""
        input.style.borderBlockColor = "green"
        numeroValido = true
    }
    return numeroValido
}

const validarInputDescripcion = (input, div) => {
    let inputComun = false
    if (input.value.length === 0) {
        div.innerHTML = "El campo no debe estar vacio"
        input.style.borderBlockColor = "red"
    } else if (input.value.length < 2 || input.value.length > 400) {
        div.innerHTML = "El campo debe contener entre 2 y 400 caracteres"
        input.style.borderBlockColor = "red"
    } else {
        div.innerHTML = ""
        input.style.borderBlockColor = "green"
        inputComun = true
    }
    return inputComun
}

const validarInputNombre = (input, div) => {
    let inputComun = false
    if (input.value.length === 0) {
        div.innerHTML = "El campo no debe estar vacio"
        input.style.borderBlockColor = "red"
    } else if (input.value.length < 2 || input.value.length > 60) {
        div.innerHTML = "El campo debe contener entre 2 y 60 caracteres"
        input.style.borderBlockColor = "red"
    } else {
        div.innerHTML = ""
        input.style.borderBlockColor = "green"
        inputComun = true
    }
    return inputComun
}

const validar = () => {
    let nombreValido = validarInputNombre(document.getElementById("nombre"), document.getElementById("mensajeNombre"))
    let temporadasValido = validarNumero(document.getElementById("temporadas"), document.getElementById("mensajeTemporadas"))
    let capituloValido = validarNumero(document.getElementById("capitulos"), document.getElementById("mensajeCapitulos"))
    let descripcionValido = validarInputDescripcion(document.getElementById("descripcion"), document.getElementById("mensajeDescripcion"))
    let imagenValido = validarInputDescripcion(document.getElementById("imagen"), document.getElementById("mensajeImagen"))
    if(nombreValido  && temporadasValido && capituloValido && descripcionValido && imagenValido){
        boton.disabled = false
    }else{
        boton.disabled = true
    }
}


document.getElementById("nombre").addEventListener("input", validar)
document.getElementById("temporadas").addEventListener("input", validar)
document.getElementById("capitulos").addEventListener("input", validar)
document.getElementById("descripcion").addEventListener("input", validar)
document.getElementById("imagen").addEventListener("input", validar) 