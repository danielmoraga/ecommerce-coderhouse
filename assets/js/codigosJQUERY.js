$(document).ready(function(){

    let busca = 0;
    $("#boton-input").click( () => {
      busca = $("#busqueda").val();  
      localStorage.setItem('buscar', JSON.stringify(busca));
    })
   
  
  
  
    $("#botoncarrito").click(function()
    { 
      $('#navegacion')[0].style.setProperty('background-color', 'yellow', 'important');
      $('#navegacion')[0].style.setProperty('color', 'black', 'important');
  
    });
    
  $("#nuevosProductos").click( function(e){
    e.preventDefault();

    $("body , html").animate({
      scrollTop: $(".lista").offset().top
    },800);
  })

  function esconderse(){
    $("#filtrogato").fadeIn(3000);
  
  }
  /*
  function slideup(){
    $("#filtrogato").slideToggle(3000);
  
  }
  */


  let aux = ``;
  $("#linkPerros").on("click", function(){
    
    let infobasedatos = JSON.parse(localStorage.getItem('infobasededatos'));
    for (let i = 0; i < infobasedatos.length; i++) {
      if(infobasedatos[i].animal == "perro"){
    console.log(infobasedatos[i].animal);
    
    aux += `
    <div class="col my-3">
      <div class="card">
      <div class="contenedor_imagen">
      <a href="${infobasedatos[i].pagina}"><img src="${infobasedatos[i].imagen}" class="card-img-top" alt="..."></a>
      </div>
        <div class="card-body">
          <h5 class="card-title">${infobasedatos[i].nombre}</h5>
          <p class="card-text">This is a longer card with supporting text below as a natural</p>
          <div class="tamano-valor mt-4">
            <h3>${infobasedatos[i].talla}</h3>
            <h2 class="card-title text-end">$${infobasedatos[i].precio}</h2>
          </div> </div>
          <div class="my-3">
          
              <a class= "boton-carrito" href="" onclick='agregarAlCarrito(${JSON.stringify(infobasedatos[i])})'>Añadir al carrito<i class="fas fa-shopping-cart"></i></a>
          </div>
      </div>
    </div>
        `;  
        $("#filtroperro").html(aux);

      }$("#Producto_talla").hide();
       };    $("#filtrogato").hide();

       $("#filtroperro").fadeToggle(3000);

  
  
      });
  
let auxili =``;
      $("#linkGatos").on("click", function(){
        $("#Producto_talla").hide();
        $("#filtroperro").hide();


        let infobasedatos = JSON.parse(localStorage.getItem('infobasededatos'));
        for (let i = 0; i < infobasedatos.length; i++) {
          if(infobasedatos[i].animal == "gato"){
        
        auxili += `
        <div class="col my-3">
          <div class="card">
          <div class="contenedor_imagen">
          <a href="${infobasedatos[i].pagina}"><img src="${infobasedatos[i].imagen}" class="card-img-top" alt="..."></a>
          </div>
            <div class="card-body">
              <h5 class="card-title">${infobasedatos[i].nombre}</h5>
              <p class="card-text">This is a longer card with supporting text below as a natural</p>
              <div class="tamano-valor mt-4">
                <h3>${infobasedatos[i].talla}</h3>
                <h2 class="card-title text-end">$${infobasedatos[i].precio}</h2>
              </div> </div>
              <div class="my-3">
              
                  <a class= "boton-carrito" href="" onclick='agregarAlCarrito(${JSON.stringify(infobasedatos[i])})'>Añadir al carrito<i class="fas fa-shopping-cart"></i></a>
              </div>
          </div>
        </div>
            `;  
            $("#filtrogato").html(auxili);
          }
           };$("#filtrogato").fadeOut(3000, esconderse)
      
          });
      $("#iconoface").hover( function(){
        $("footer").removeClass("bg-color");
        $("footer").addClass("hover");
      })

      $("#navegacion").hover( function(){
        $(".logo").animate({left:"30px"});
        
      })

  });