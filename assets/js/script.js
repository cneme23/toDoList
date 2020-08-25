//El codigo siguiente sirve para tachar tareas:

$("ul").on("click", "li", function(){
    $(this).toggleClass("completado")
});

//Función para borrar items
  $("ul").on("click", "span", function(event) {
    $(this).parent().fadeOut(500, function(){
    $(this).remove();
    });
    event.stopPropagation();
  });
 
//Este codigo sirve para  agregar items
$("input[type='text']").keypress(function(event){
    if(event.key == "Enter") {
        $("ul").append("<li><span><i class='fa fa-trash' aria-hidden='true'></i></span> "+ $(this).val() + "</li>");
          $(this).val("");
        event.stopPropagation();
      }
    });

    //fucionalidad de la flecha que abre y cierra listado
    $(".fa-arrows-alt-v").click(function(){
        $("ul").slideToggle()
       })