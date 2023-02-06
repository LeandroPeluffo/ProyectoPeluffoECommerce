const nombre = document.querySelector("#nombre");
const email = document.querySelector("#email");
const numero = document.querySelector("#numero");
const mensaje = document.querySelector("#mensaje");
const success = document.querySelector("#success");
const errorNodes = document.querySelector(".error");


function validarForm(){
    
    vaciarMensajes();
    let errorFlag = false;

    if(nombre.Value.length < 2){
        errorNodes[0].innerText = "El nombre debe ser mas largo";
        nombre.classList.add("error-border");
        errorFlag = true;
    }

    if(!emailValido(email.Value)){
        errorNodes[1].innerText = "Mail invalido";
        nombre.classList.add("error-border");
        errorFlag = true;
    }

    if(mensaje.value.length < 1){
        errorNodes[2].innerText = "por favor ingrese un mensaje";
        mensaje.classList.add("error-border");
        errorFlag = true;
    }

    if(!errorFlag){
        success.innerText = "enviado"
    }
}


function vaciarMensajes(){
    for(let i = 0; i < errorNodes.length; i++){
        errorNodes[i].innerText = "";
    }
    success.innerText = "";
    nombre.classList.remove("error-border");
    email.classList.remove("error-border");
    mensaje.classList.remove("error-border");
}



function emailValido(email){
    let patron = /\S+@\S+\.\S+/;
    return patron.test(email);
}