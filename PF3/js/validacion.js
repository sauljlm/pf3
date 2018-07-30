let formulario =document.getElementsByClassName("form_reg")[0];
let boton =document.getElementById("submit");
function validarNombre(e){
    if(formulario.nombre.value==0){
        alert("ingrese su numbre");
        e.preventDefault();
    }
}
function validarID(e){
    if(formulario.id.value==0){
        alert("ingrese su id");
        e.preventDefault();
    }
}
function validartipoCliente(e){
    if(formulario.Tcliente.value==0){
        alert("ingrese el tipo de cliente");
        e.preventDefault();
    }
}
function validarcantidad(e){
    if(formulario.Tcliente.value==0){
        alert("ingrese la cantidad de libros");
        e.preventDefault();
    }
}
function validar(e){
    validarNombre(e);
    validarID(e);
    validartipoCliente(e);
    validarcantidad(e);
}
formulario.addEventListener("submut",validar);