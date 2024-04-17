var spinners=document.querySelector("#spinner");
document.querySelector("#btnver").onclick=()=>{
   spinner.innerHTML="<img src='SPINNER/spinner1.gif' width=300px > ";

   setTimeout(()=>{
      spinners.innerHTML="<h1>HOLA!</h1>"; 
   },2000);
}