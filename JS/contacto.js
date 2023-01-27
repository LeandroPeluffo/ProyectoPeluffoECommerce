const nombre = document.querySelector("#nombre");
const email = document.querySelector("#email");
const numero = document.querySelector("#numero");
const mensaje = document.querySelector("#mensaje");
const success = document.querySelector("#success");
const errorNodes = document.querySelector(".error");


function validarForm(){
    
    vaciarMensajes();

    if(nombre.Value.length < 2){
        errorNodes[0].innerText = "El nombre debe ser mas largo";
        nombre.classList.add("error-border");
    }

    if(!emailValido(email.Value)){
        errorNodes[1].innerText = "Mail invalido";
        nombre.classList.add("error-border")
    }
}


function vaciarMensajes(){
    for(let i = 0; i < errorNodes.length; i++){
        errorNodes[i].innerText = "";
    }
    nombre.classList.remove("error-border");
    email.classList.remove("error-border");
}



function emailValido(email){
    let patron = /\S+@\S+\.\S+/;
    return patron.test(email);
}