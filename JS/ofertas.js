//cards de pagina productos (productos con oferta)

const zonaCardsOfertas = document.querySelector(".containerCardsOfertas")

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
            </div>
        `
    }, "")
    return arrayOfertas
}

zonaCardsOfertas.innerHTML = cardsDeProductosOfertas (productos)


