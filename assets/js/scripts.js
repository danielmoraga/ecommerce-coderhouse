let basedeDatos = [];
let carrito = [];
let aux = ``;
let auxiliar = ``;
var lista;
let auxTotal = 0;
let busqueda = ``;



window.onload = async function() {
  let basedeDatos = await traerDatos();
  console.log(basedeDatos)
  


for (let i = 0; i < basedeDatos.length; i++) {
  if (basedeDatos[i].stock > 0) {
    aux += `
    <div class="col  my-3 ${basedeDatos[i].clase}" ">
      <div class="card">
      <div class="contenedor_imagen">
      <a href="${basedeDatos[i].pagina}"><img src="${basedeDatos[i].imagen}" class="card-img-top" alt="..."></a>
      </div>
        <div class="card-body">
          <h5 class="card-title">${basedeDatos[i].nombre}</h5>
          <p class="card-text">This is a longer card with supporting text below as a natural</p>
          <div class="tamano-valor mt-4">
            <h3>${basedeDatos[i].talla}</h3>
            <h2 class="card-title text-end">$${basedeDatos[i].precio}</h2>
          </div> </div>
          <div class="my-3">
          
              <a class= "boton-carrito" id="botonCarrito" href="" onclick='agregarAlCarrito(${JSON.stringify(basedeDatos[i])})'>Añadir al carrito<i class="fas fa-shopping-cart"></i></a>
          </div>
      </div>
    </div>
        `;
  }else{
      aux += `
      <h2>No hay stock</h2>`
  }
}



document.getElementById("Producto_talla").innerHTML = aux;

localStorage.setItem('infobasededatos', JSON.stringify(basedeDatos));

if (localStorage.getItem("carrito") != null) {
  console.log("Entro a la validacion");
  let valoresDelCarrito = JSON.parse(localStorage.getItem("carrito"));
  carrito = valoresDelCarrito;
}

function agregarAlCarrito(producto) {
  carrito.push(producto);
  console.log(carrito);
  localStorage.setItem("carrito", JSON.stringify(carrito));
  
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
    auxiliar += `
    <div>
                          <div class="contenedor-producto">
                              <div class="contenedor-foto">
                                  <div class="contenedor-img">
                                    <img src="${carrito[i].imagen}" class="card-img-top" alt="...">
                                  </div>
                              </div>
                              <div class="contenedor-titulo">
                                <p>${carrito[i].nombre}</p>
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

document.getElementById("carrito").innerHTML = auxiliar;

function numeroProductos(){
  var cantidadProductos = JSON.parse(localStorage.getItem("carrito")) ;
  console.log(cantidadProductos.length);
  var numero = `
  <p>${cantidadProductos.length}</p>`
  document.getElementById('numerocarrito').innerHTML = numero;
}

numeroProductos();

  function borrar(){
  var lista = document.getElementById("Producto_talla");
  lista.parentNode.removeChild(lista)
  }
  
    function total(){
      var numerototal = JSON.parse(localStorage.getItem("carrito"));  
      for(let i=0; i < numerototal.length; i++ ) {
          auxTotal += numerototal[i].precio;    
      }
      document.getElementById("precio-total").innerHTML = "$" + auxTotal;
        }
        total();

      };
      async function traerDatos() {
        const response = await fetch("/data.json");
        const json = await response.json();
        return json;
      }

