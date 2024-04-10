let ancho=document.querySelector("#ancho")
let alto=document.querySelector("#alto")
let vancho=document.querySelector("#vancho")
let valto=document.querySelector("#valto")
let color=document.querySelector("#colorf")
let anchoBorde=document.querySelector("#anchoB")
let vab=document.querySelector("#VanchoB")
let colorB=document.querySelector("#colorB")
let tip=document.querySelector("#tipoB")
let radio=document.querySelector("#radius")
let radioV=document.querySelector("#radiusv")
let dv=document.querySelector("#caja")
ancho.oninput=()=>{
   vancho.innerHTML=ancho.value;
   let n=parseInt(ancho.value);
   vancho.innerHTML=n;
   dv.style.width=n+"px";
  
}
alto.oninput=()=>{
   valto.innerHTML=alto.value;
   let n=parseInt(alto.value);
   valto.innerHTML=n;
   dv.style.height=n+"px";
}

color.onchange=()=>{
   let c=(color.value);
dv.style.background=c;
}

anchoBorde.oninput=()=>{
   vab.innerHTML=anchoBorde.value;
   let n=parseInt(anchoBorde.value);
   vab.innerHTML=n;
   dv.style.borderWidth=n+"px";
  console.log("tamaño de borde cambiado a: "+n);
}

colorB.oninput = () => {
  let cb = colorB.value;
  dv.style.borderColor = cb;
  console.log("color cambiado a: "+cb);
}

tip.onchange = () => {
  let n = tip.value;
  dv.style.borderStyle = n;
  console.log("tipo cambiado a: "+n);
}

radio.oninput=()=>{
   radioV.innerHTML=radio.value;

   let br=radio.value;
   radioV.innerHTML=br;
   dv.style.borderRadius=br+"%";  
}
