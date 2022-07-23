var btnFormulario = document.querySelector("#btn-formulario");

btnFormulario.addEventListener("click",function(event){
    event.preventDefault();

    var mensajesErrores = document.querySelector("#mensajes-errores");
    mensajesErrores.innerHTML = "";

});