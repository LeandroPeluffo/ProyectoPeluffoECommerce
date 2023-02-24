var toggle = document.getElementById('modoOscuro');
var body = document.querySelector('body');



toggle.onclick = function(){
    toggle.classList.toggle('active');
    body.classList.toggle('active');

if(document.body.classList.contains('active'))
    localStorage.setItem('modoOscuro','activado');  
    else
    localStorage.setItem('modoOscuro','desactivado');
}

if(localStorage.getItem('modoOscuro') === 'activado'){
    body.classList.toggle('active');
}





