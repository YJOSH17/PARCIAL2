var rojo = document.querySelector("#rojo");
var verde = document.querySelector("#verde");
var azul = document.querySelector("#azul");

let vrojo=document.querySelector("#vrojo");
let vverde=document.querySelector("#vverde");
let vazul=document.querySelector("#vazul");

let resultado = document.querySelector("#resultado");

let hexa = document.querySelector("#exa");

vrojo.innerHTML=rojo.value;

rojo.oninput = function(){
  vrojo.innerHTML=this.value;
  color();
}

vverde.innerHTML=verde.value;

verde.oninput= function(){
  vverde.innerHTML=this.value;
  color();
}

vazul.innerHTML = azul.value;

azul.oninput = function(){
  vazul.innerHTML = this.value;
  color();
}


function color() {
  let r= parseInt(rojo.value);
  let v= parseInt(verde.value);
  let a= parseInt(azul.value);
  
  rgb.innerHTML="RGB("+r+","+v+","+a+")";
  
  
  resultado.style.backgroundColor = "rgb("+r+","+v+","+a+")";
  
  hexa.innerHTML="#"+convertirhexa(r)+convertirhexa(v)+convertirhexa(a);
}

function convertirhexa(valor) {
  let hexa=(valor>16)?valor.toString(16).toUpperCase():"0"+valor.toString(16).toUpperCase();
  return hexa;
}