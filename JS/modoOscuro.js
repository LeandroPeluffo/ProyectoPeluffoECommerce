var toggle = document.getElementById('modoOscuro');
var main = document.querySelector('main');

toggle.onclick = function(){
    toggle.classList.toggle('active');
    main.classList.toggle('active');
}

