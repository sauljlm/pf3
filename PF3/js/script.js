let nueva="si";
//while(nueva!="q"){
  let tipos=["hola","sociales","fisica"];
  let cantidad=[];
  let precios =[2000,5000,4000];
  let descuento;
  let cantidad_total =0;
  let total_a_pagar =0;
  let a=0;
  let subtotal_sin_descuento =0;
  Tcliente=parseInt(Tcliente);
  total_a_pagar=parseInt(total_a_pagar);
  //dom
  function formulario(){
    let nombre = document.getElementById("nombre");
    let nombrev=nombre.Value;
    let id = document.getElementById("id");
    let idv=id.value;
    let Tcliente = document.getElementById("Tcliente");
    let tipo=document.getElementById("tipo");
    let cantidad=document.getElementById("cantidad");
  }
  let boton=document.getElementById("btn");
  btn.addEventListener("click",formulario);
  //si desea libros
  for(let i=0; i<tipos.length; i++){
    //let materia = prompt("desea libros de " + tipos[i] + "?");
    if(materia == "si"){
      cantidad_total =parseInt(prompt("cuantos desea comprar ?"));
      cantidad.push(cantidad_total); 
      a =parseInt(a);
      a += cantidad_total;
    }
  
  switch(Tcliente){
    case 1:
      descuento =30;
      break;
    case 2:
      descuento =20;
      break;
    case 3:
      descuento =10;
      break;
    default:
      descuento  =0;
      break;
  }
  cantidad_total=a;
  //subtotal sin descuento
  for(let i=0;i<cantidad.length; i++){
    descuento[i]=parseInt(descuento[i]);
    tipos[i]=parseInt(tipos[i]);
    subtotal_sin_descuento = subtotal_sin_descuento + (cantidad[i]*precios[i]);
  }
  total_a_pagar=subtotal_sin_descuento - ((subtotal_sin_descuento*descuento)/100);
    
  console.log(nombre);
  console.log(cantidad_total);
  console.log(subtotal_sin_descuento);
  console.log(descuento);
  console.log(total_a_pagar);
  nueva=document.getElementById("nueva");
  }
