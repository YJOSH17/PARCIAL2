let numero = document.querySelector("#numero");
let vnum = document.querySelector("#vnum");
let borrar = document.querySelector("#borrar");
let resultado = document.querySelector("#resultado");

vnum.innerHTML = numero.value;

numero.oninput =()=>{
  
  vnum.innerHTML="$"+numero.value+ "MXN";
  let n = parseFloat(numero.value);
  let res = n*0.060;
  resultado.innerHTML="$"+res+"USD";
}

borrar.onclick=()=>{
  resultado.innerHTML="";
}