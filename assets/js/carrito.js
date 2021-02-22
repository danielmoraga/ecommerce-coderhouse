let basedeDatos = [];
let carrito = [];
let aux = ``;
let auxiliar = ``;
let auxTotal = 0;
let nombreProd;



class Producto_talla {
  constructor(idProducto, nombreMarca, tallaProducto, precioProducto, stockProducto, imagenProducto, paginaProducto, animalProducto) {
    this.id = idProducto;
    this.nombre = nombreMarca;
    this.talla = tallaProducto;
    this.precio = precioProducto;
    this.stock = stockProducto;
    this.imagen = imagenProducto;
    this.pagina = paginaProducto;
    this.animal = animalProducto;
  }
}


let ProductoPerro1 = new Producto_talla(1,"Collar Perro", "XS", 500, 20, "https://cdn.shopify.com/s/files/1/0185/9786/products/13_Yaxha_Camel_Frente_sin_mo_o_1300x1300.jpg?v=1569244220", "collar_perro_XS.html", "perro")
let ProductoPerro2 = new Producto_talla(2,"Collar Perro", "MD", 300, 10, "https://www.tqel.es/1018-large_default/collar-de-piel-para-perros-pequenos-medianos-rojo-marsala.jpg" , "collar_perro_MD.html","perro")
let ProductoGato1 = new Producto_talla(3,"Collar Gato", "XS", 200, 20, "https://m.media-amazon.com/images/I/41fut+Uoi-L._AC_SS350_.jpg", "collar_gato_XS.html", "gato")
let ProductoGato2 = new Producto_talla(4,"Collar Gato", "MD", 300, 30, "https://ae01.alicdn.com/kf/HTB1o7lwXZfpK1RjSZFOq6y6nFXaX/Collar-de-gato-personalizado-de-silicona-para-perros-peque-os-Collar-personalizado-para-mascotas-chat-con.jpg", "collar_gato_MD.html", "gato")
let ProductoGato3 = new Producto_talla(5,"Collar Gato", "LG", 200, 20, "https://m.media-amazon.com/images/I/41fut+Uoi-L._AC_SS350_.jpg", "collar_gato_LG.html", "gato")
let ProductoGato4 = new Producto_talla(6,"Collar Gato", "SM", 300, 30, "https://ae01.alicdn.com/kf/HTB1o7lwXZfpK1RjSZFOq6y6nFXaX/Collar-de-gato-personalizado-de-silicona-para-perros-peque-os-Collar-personalizado-para-mascotas-chat-con.jpg" , "collar_gato_SM.html", "gato")


basedeDatos.push(ProductoPerro1);
basedeDatos.push(ProductoPerro2);
basedeDatos.push(ProductoGato1);
basedeDatos.push(ProductoGato2);
basedeDatos.push(ProductoGato3);
basedeDatos.push(ProductoGato4);




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
      <div class=" row  justify-content-around align-items-center ">
          <div class="contendor-foto col-md-2">
          <a href="collar_perro_XS.html"> <img src="${carrito[i].imagen}" class="card-img-top" alt="...">
          </a>
          </div>
          <div class="nombreProducto col-md-5">
            <h5>${carrito[i].nombre}</h5>
          </div>
          <div class="valor-producto col-md-2 d-flex justify-content-between">
            <h2>${carrito[i].precio}</h2>
            <input class="col-2 mx-3" type="number" placeholder="1">
          </div>
          <div class="eliminar col-md-2">
            <a class="eliminar" onclick="eliminarproducto()" href=""><i class="fas fa-trash-alt"></i></a>
          </div>
        </div><hr>
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

  for (let i = 0; i < basedeDatos.length; i++) {
    if (basedeDatos[i].id == 1) {
      nombreProd = `
      <a class="home" href="index.html">Home ></a>
      <a class="home" href="${basedeDatos[i].pagina}">${basedeDatos[i].nombre} ></a>
      <a class="destacado" href="">Carrito ></a>

    `;
} 
} 
document.getElementById("producto").innerHTML = nombreProd;
