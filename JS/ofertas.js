//cards de pagina productos (productos con oferta)
const zonaCardsOfertas = document.querySelector(".containerCardsOfertas")


var arrayOfertas = productos.filter(function(producto) {
    return producto.oferta;
});

console.log(arrayOfertas);

const cardsDeProductosOfertas = ( array ) => {
    const arrayOfertas = array.reduce(( acc, element ) => {
        return acc + `
            <div class="card" id=${element.id}
                <div class="card-img">
                    <img class="foto" src=${element.img} alt=${element.nombre}
                </div>
                <h2>
                    ${element.nombre}
                </h2>
                <h3>
                    $${element.precio}
                </h3>
                <button class="agregarAlCarrito" id=${element.id}> agregar producto al carrito</button>
                <h3>
                    Con oferta
                </h3>
            </div>
        `
    }, "")
    return arrayOfertas
}

zonaCardsOfertas.innerHTML = cardsDeProductosOfertas (arrayOfertas)

const añadirAlCarrito = () => {
    const addButton = document.querySelectorAll('.agregarAlCarrito')
    console.log(addButton);
    addButton.forEach(element => {
        element.onclick = () => {
            console.log(element.id);
            const carrito = localStorage.getItem('carrito') || []
            carrito.push(element)
            localStorage.setItem('carrito' , carrito) 
            console.log(carrito);
        }
    });
}




añadirAlCarrito()

