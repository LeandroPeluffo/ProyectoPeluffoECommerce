const zonaCards = document.querySelector(".container")

const cardsAHtml = ( array ) => {
    const arrayReducido = array.reduce(( acc, element ) => {
        return acc + `
            <div class="card" id=${element.id}
                <div class="card-img">
                    <img src=${element.img} alt=${element.nombre}
                </div>
                <h2>
                    ${element.nombre}
                </h2>
                <h3>
                    ${element.precio}
                </h3>
                <button class="agregarAlCarrito" id=${element.id}> agregar producto al carrito</button>
            </div>
        `
    }, "")
    return arrayReducido
}

zonaCards.innerHTML = cardsAHtml(productos)