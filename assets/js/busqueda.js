let auxi = ``;
$(document).ready(function(){

  function comparar(){
    var compara = JSON.parse(localStorage.getItem('buscar'));
    let infobasedatos = JSON.parse(localStorage.getItem('infobasededatos'));
    
    for (let i = 0; i < infobasedatos.length; i++) {
      if(compara == infobasedatos[i].animal){
        auxiliar += `
        <div class="container my-3">
                              <div class="contenedor-producto">
                                  <div class="contenedor-foto">
                                      <div class="contenedor-img">
                                      <a href="${infobasedatos[i].pagina}"><img src="${infobasedatos[i].imagen}" class="card-img-top" alt="...">
                                      </a>
                                      </div>
                                  </div>
                                  <div class="contenedor-titulo">
                                    <p>${infobasedatos[i].nombre}</p>
                                  </div>
                                  <div class="contenedor-precio">
                                    <p>$${infobasedatos[i].precio}</p>
                                  </div>
                                  <div class="contenedor-eliminar">
                                  <a class="eliminar" href="index.html"><i class="fas fa-home fa-2x"></i></a>
                                </div>
                              </div>
                            </div>
          `;
      }
$("#principal").html(auxiliar);
  }

}
comparar();
});

if (localStorage.getItem("carrito") != null) {
  let valoresDelCarrito = JSON.parse(localStorage.getItem("carrito"));
  carrito = valoresDelCarrito;
}


function agregarAlCarrito(producto) {
  carrito.push(producto);
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
    if (i != 0) {
      nuevoCarrito.push(carrito[i]);
    }
  }
  localStorage.setItem("carrito", JSON.stringify(nuevoCarrito));
  carrito = nuevoCarrito;
}

function mostrarCarrito(){
  var verCarrito = JSON.parse(localStorage.getItem("carrito")) ;
  for(i = 0 ; i < verCarrito.length; i++){
    auxi += `
    <div>
                          <div class="contenedor-producto">
                              <div class="contenedor-foto">
                                  <div class="contenedor-img">
                                    <img src="${carrito[i].imagen}" class="card-img-top" alt="...">
                                  </div>
                              </div>
                              <div class="contenedor-titulo">
                                <p>${carrito[i].nombre}</p>
                                <p>${carrito[i].talla}</p>

                              </div>
                              <div class="contenedor-precio">
                                <p>$${carrito[i].precio}</p>
                              </div>
                              <div class="contenedor-eliminar">
                                <a class="eliminar" onclick="eliminarproducto()" href=""><i class="fas fa-trash-alt"></i></a>
                              </div>
                          </div>
                        </div><hr>
      `;
    }
  }
mostrarCarrito();

document.getElementById("carrito").innerHTML = auxi;

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