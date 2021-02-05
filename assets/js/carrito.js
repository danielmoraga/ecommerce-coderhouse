let basedeDatos = [];
let carrito = [];
let aux = ``;
let auxiliar = ``;
let auxTotal = 0;
let nombreProd;

if (localStorage.getItem("carrito") != null) {
    console.log("Entro a la validacion");
    let valoresDelCarrito = JSON.parse(localStorage.getItem("carrito"));
    carrito = valoresDelCarrito;
  }
  console.log(carrito);
  
  
  function agregarAlCarrito(producto) {
    carrito.push(producto);
    console.log(carrito);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    // precio-total
    let aux = 0;
    for (let i = 0; i < carrito.length; i++) {
      aux += carrito[i].precio;
    }
    document.getElementById("precio-total").innerHTML = "U$S" +aux;
  }

  
function eliminarproducto() {
    const nuevoCarrito = [];
    for (let i = 0; i < carrito.length; i++) {
      if (i != 1) {
        nuevoCarrito.push(carrito[i]);
      }
    }
    localStorage.setItem("carrito", JSON.stringify(nuevoCarrito));
    carrito = nuevoCarrito;
  }
  
  function mostrarCarrito(){
    var verCarrito = JSON.parse(localStorage.getItem("carrito")) ;
    for(i = 0 ; i < verCarrito.length; i++){
      auxiliar += `
      <div class="contendor-carrito card col-xs-12 col-md-8">
            <div class="row my-3 align-items-center">
            <div class="foto-producto col-2">
                <div class="contendor-foto">
                <img src="${carrito[i].imagen}" class="card-img-top" alt="...">
                </div>
            </div>
            <div class="card-title col-5">
                <h5>${carrito[i].nombre}</h5>
            </div>
            <div class="valor-producto d-flex justify-content-around col-5">
                <h2>${carrito[i].precio}</h2>
                <input class="col-2" type="number" placeholder="1">
            </div>
            <div class="eliminar col-12 d-flex justify-content-end px-3">
            <a class="eliminar" onclick="eliminarproducto()" href=""><i class="fas fa-trash-alt"></i></a>
            </div>
            </div>
        </div>
        `;
      }
      document.getElementById('carrito').innerHTML = auxiliar;

    }
mostrarCarrito()

  function numeroProductos(){
    var cantidadProductos = JSON.parse(localStorage.getItem("carrito")) ;
    console.log(cantidadProductos.length);
    var numero = `
    <p>${cantidadProductos.length}</p>`
    document.getElementById('numerocarrito').innerHTML = numero;
  }
  
  numeroProductos();
  
function total(){
var numerototal = JSON.parse(localStorage.getItem("carrito"));  
for(let i=0; i < numerototal.length; i++ ) {
    auxTotal += numerototal[i].precio;    
}
document.getElementById("precio-total").innerHTML = "$" + auxTotal;
  }
  total();