let eval = document.querySelector("#evaluar");

eval.onclick=()=>{
   
   let p1 = document.querySelector('input[name="p1"]:checked');
 Swal.fire("Respuesta P1: " + '"'+p1.value+'"');

   if (p1.value=="a") {
Swal.fire({
   title:"CECYTEM",
   text:"Respuesta P1: " + '"'+p1.value+'"',
   icon:"success"
});
   } else {
Swal.fire({
   title:"CECYTEM",
   text:"Respuesta P1: " + '"'+p1.value+'"',
   icon:"error"
});
   }
   
}