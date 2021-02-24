let basedeDatos = [];
let carrito = [];
let aux = ``;
let auxiliar = ``;
var lista;
let capInput = 0;
let auxvalor = ``;
let auxTotal = 0;
let busqueda = ``;

class Producto_talla {
  constructor(idProducto, nombreMarca, tallaProducto, precioProducto, stockProducto, imagenProducto, paginaProducto, animalProducto, claseProducto) {
    this.id = idProducto;
    this.nombre = nombreMarca;
    this.talla = tallaProducto;
    this.precio = precioProducto;
    this.stock = stockProducto;
    this.imagen = imagenProducto;
    this.pagina = paginaProducto;
    this.animal = animalProducto;
    this.clase = claseProducto;
  }
}


let ProductoPerro1 = new Producto_talla(1,"Collar Perro", "XS", 500, 20, "https://cdn.shopify.com/s/files/1/0185/9786/products/13_Yaxha_Camel_Frente_sin_mo_o_1300x1300.jpg?v=1569244220", "collar_perro_XS.html", "perro", "collarPerro1")
let ProductoPerro2 = new Producto_talla(2,"Collar Perro", "MD", 300, 10, "https://www.tqel.es/1018-large_default/collar-de-piel-para-perros-pequenos-medianos-rojo-marsala.jpg" , "collar_perro_MD.html","perro", "collarPerro2")
let ProductoGato1 = new Producto_talla(3,"Collar Gato", "XS", 200, 20, "https://m.media-amazon.com/images/I/41fut+Uoi-L._AC_SS350_.jpg", "collar_gato_XS.html", "gato", "collarGato1")
let ProductoGato2 = new Producto_talla(4,"Collar Gato", "MD", 300, 30, "https://ae01.alicdn.com/kf/HTB1o7lwXZfpK1RjSZFOq6y6nFXaX/Collar-de-gato-personalizado-de-silicona-para-perros-peque-os-Collar-personalizado-para-mascotas-chat-con.jpg", "collar_gato_MD.html", "gato","collarGato2")
let ProductoGato3 = new Producto_talla(5,"Collar Gato", "LG", 200, 20, "https://m.media-amazon.com/images/I/41fut+Uoi-L._AC_SS350_.jpg", "collar_gato_LG.html", "gato", "collarGato2")
let ProductoGato4 = new Producto_talla(6,"Collar Gato", "SM", 300, 30, "https://ae01.alicdn.com/kf/HTB1o7lwXZfpK1RjSZFOq6y6nFXaX/Collar-de-gato-personalizado-de-silicona-para-perros-peque-os-Collar-personalizado-para-mascotas-chat-con.jpg" , "collar_gato_SM.html", "gato", "collarGato3")


basedeDatos.push(ProductoPerro1);
basedeDatos.push(ProductoPerro2);
basedeDatos.push(ProductoGato1);
basedeDatos.push(ProductoGato2);
basedeDatos.push(ProductoGato3);
basedeDatos.push(ProductoGato4);

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

/*
  
  let gato = basedeDatos.filter(filtrogato =>filtrogato.animal=="gato")
  
     

  var boton = document.getElementById("boton-input");

  boton.addEventListener("click", () => {
  
    var input = document.getElementById("busqueda");
    var valor = input.value;
    auxvalor = `<div><h1 class="grande">${valor}</h1></div>`
    
  
    document.getElementById("ingresoInput").innerHTML = auxvalor; 
    alert("Se ingresa el codigo html bajo el slider " + auxvalor + "pero se borra inmediatamente") ;
    
  });

  function pressboton(){
   var valorboton = document.getElementById("busqueda").value;
       auxvalor = `<div><h1 class="grande">${valorboton}</h1></div>`
document.getElementById("ingresoInput").innerHTML = valorboton; 
alert("Se ingresa el codigo html bajo el slider " + auxvalor + "pero se borra inmediatamente") ;

  }
*/



