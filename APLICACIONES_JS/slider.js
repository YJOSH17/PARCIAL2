let valor=document.querySelector("#valor")
let dv=document.querySelector("#value")
let box=document.querySelector("#caja")
valor.oninput=()=>{
   dv.innerHTML=valor.value;
   dv.style.color="red";

   if(valor.value <= 25){
      dv.style.color="white";
   }else if(valor.value <=50){
      dv.style.color="yellow";
   }
   else if(valor.value <=75){
      dv.style.color="purple";
   }else{
      dv.style.color="skyblue";
   }
   
   let n=parseInt(valor.value);
   dv.innerHTML=n;
   box.style.width=n+"px";
   box.style.height=n+"px";
   box.style.borderRadius=n+"%";
   
   if(n <= 100){
      box.style.background="purple";
   }else if(n <=200){
      box.style.background="blue";
   }
   else if(n <=300){
      box.style.background="magenta";
   }else{
      box.style.background="skyblue";
   }
}