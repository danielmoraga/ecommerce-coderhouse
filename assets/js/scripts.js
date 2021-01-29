

class Producto_talla {
  constructor(nombreMarca, tallaProducto, precioProducto, stockProducto, imagenProducto) {
    this.nombre = nombreMarca;
    this.talla = tallaProducto;
    this.precio = precioProducto;
    this.stock = stockProducto;
    this.imagen = imagenProducto;
  }
}


let ProductoPerro1 = new Producto_talla("Collar Perro", "XS", "$500", 20, "https://cdn.shopify.com/s/files/1/0185/9786/products/13_Yaxha_Camel_Frente_sin_mo_o_1300x1300.jpg?v=1569244220")
let ProductoPerro2 = new Producto_talla("Collar Perro", "MD", "$300", 10, "https://www.tqel.es/1018-large_default/collar-de-piel-para-perros-pequenos-medianos-rojo-marsala.jpg")
let ProductoGato1 = new Producto_talla("Collar Gato", "XS", "$200", 20, "https://m.media-amazon.com/images/I/41fut+Uoi-L._AC_SS350_.jpg")
let ProductoGato2 = new Producto_talla("Collar Gato", "MD", "$300", 30, "https://ae01.alicdn.com/kf/HTB1o7lwXZfpK1RjSZFOq6y6nFXaX/Collar-de-gato-personalizado-de-silicona-para-perros-peque-os-Collar-personalizado-para-mascotas-chat-con.jpg")
let ProductoGato3 = new Producto_talla("Collar Gato", "XS", "$200", 20, "https://m.media-amazon.com/images/I/41fut+Uoi-L._AC_SS350_.jpg")
let ProductoGato4 = new Producto_talla("Collar Gato", "MD", "$300", 30, "https://ae01.alicdn.com/kf/HTB1o7lwXZfpK1RjSZFOq6y6nFXaX/Collar-de-gato-personalizado-de-silicona-para-perros-peque-os-Collar-personalizado-para-mascotas-chat-con.jpg")

let basedeDatos = [];

basedeDatos.push(ProductoPerro1);
basedeDatos.push(ProductoPerro2);
basedeDatos.push(ProductoGato1);
basedeDatos.push(ProductoGato2);
basedeDatos.push(ProductoGato3);
basedeDatos.push(ProductoGato4);

let aux = ``;
for (let i = 0; i < basedeDatos.length; i++) {
  if (basedeDatos[i].stock > 0) {
    aux += `
    <div class="col">
      <div class="card">
        <a href="mascarillaUno.html"><img src="${basedeDatos[i].imagen}" class="card-img-top" alt="..."></a>
        <div class="card-body">
          <h5 class="card-title">${basedeDatos[i].nombre}</h5>
          <p class="card-text">This is a longer card with supporting text below as a natural</p>
          <div class="tamano-valor mt-4">
            <h3>$${basedeDatos[i].talla}</h3>
            <h2 class="card-title text-end">${basedeDatos[i].precio}</h2>
          </div>        </div>
      </div>
    </div>
        `;
  }else{
      aux += `
      <h2>No hay stock</h2>`
  }
}

document.getElementById("Producto_talla").innerHTML = aux;

let carrito = [basedeDatos];