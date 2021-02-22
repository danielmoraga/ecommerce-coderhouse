$(document).ready(function(){

    let numero = 0;
    $("#boton-input").click( () => {
      numero = $("#busqueda").val();  
      $("#evento").html(numero);
    })
   
  
  
    $("#botoncarrito").click(function()
    { 
      $('#navegacion')[0].style.setProperty('background-color', 'yellow', 'important');
      $('#navegacion')[0].style.setProperty('color', 'black', 'important');
  
    });
    
  
  
  
  
  
  
  });