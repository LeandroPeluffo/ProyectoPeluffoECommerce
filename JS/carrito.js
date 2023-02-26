const idDeProductoStorage = localStorage.getItem("carrito")

const numero = parseInt(idDeProductoStorage)

const productoEncontrado = productos.find(producto => producto.id === numero);

const nombreProducto = productoEncontrado.nombre;
const precioProducto = productoEncontrado.precio;

console.log(`El producto seleccionado es ${nombreProducto} y su precio es ${precioProducto}`);



const zonaCarrito = document.querySelector(".containerCarrito")

const productosDelCarrito = ( array ) => {
    const carritoArray = array.reduce(( acc, element ) => {
        return acc + `
            <div class="cart-items" id=${element.id}
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



zonaCards.innerHTML = productosDelCarrito(carrito)

productosDelCarrito (carrito)