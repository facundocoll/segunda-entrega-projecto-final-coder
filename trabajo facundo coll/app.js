const shopContent = document.getElementById("shopContent")
const verCarrito = document.getElementById("verCarrito")
const modalContainer = document.getElementById("modal-container")


let carrito = []

productos.forEach((product)=>   {
let content = document.createElement("div")
content.className = "card"
content.innerHTML = `
<img src="${product.img}">
<h3>${product.nombre}</h3>
<p>$${product.precio}</p>
`
shopContent.append(content)

let comprar = document.createElement("button")
comprar.innerText = "comprar"
content.append(comprar)
comprar.className = "comprar"
comprar.addEventListener("click", () =>{
    carrito.push({
        id: product.id,
        img: product.img,
        nombre: product.nombre,
        precio: product.precio,
    })
    console.log(carrito)
})
})

verCarrito.addEventListener("click", () => {
const modalHeader = document.createElement("div")
modalHeader.className = "modal-header"
modalHeader.innerHTML = `
<h1 class= "modal-header-tittle">Carrito</h1>
`
modalContainer.append(modalHeader)

const modalButton = document.createElement("h1")
modalButton.innerText = "x"
modalButton.className = "modal-header-button"
modalHeader.append(modalButton)
modalButton.addEventListener("click", () => {
    modalContainer.style.display = "none"
})

carrito.forEach((product) => {
    let carritoContent = document.createElement("div")
    carritoContent.className = "modal-content"
    carritoContent.innerHTML = `
    <img src="${product.img}"
    <h3>${product.nombre}</h3>
    <p>${product.precio}</p>
    `
    modalContainer.append(carritoContent)
})
const total = carrito.reduce((acc, el) => acc + el.precio, 0)

const totalBuying = document.createElement("div")
totalBuying.className = "total-content"
totalBuying.innerHTML = `Total a pagar $${total}`
modalContainer.append(totalBuying)
}) 