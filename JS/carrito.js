const carrito = []


const zonaCarrito = document.querySelector(".containerCarrito")

const cardsDeProductos = ( array ) => {
    const carritoArray = array.reduce(( acc, element ) => {
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
                <button class="quitarDelCarrito" id=${element.id}> Eliminar del carrito</button>
            </div>
        `
    }, "")
    return arrayMenorCards
}

zonaCards.innerHTML = cardsDeProductos(carrito)