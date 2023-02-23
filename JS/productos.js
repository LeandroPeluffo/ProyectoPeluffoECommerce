//cards de pagina productos (todos los productos)

const zonaCards = document.querySelector(".containerCards")

const cardsDeProductos = ( array ) => {
    const arrayMenorCards = array.reduce(( acc, element ) => {
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
            </div>
        `
    }, "")
    return arrayMenorCards
}

zonaCards.innerHTML = cardsDeProductos(productos)

const añadirAlCarrito = () => {
    const addButton = document.querySelectorAll('.agregarAlCarrito')
    console.log(addButton);
    addButton.forEach(element => {
        element.onclick = () => {
            console.log(element.id);
        }
    });
}

añadirAlCarrito()