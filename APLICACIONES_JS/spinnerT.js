var n=1;
var input=document.querySelector("#numero");
var tabla=document.querySelector("#tabla");
var spinners=document.querySelector("#spinner");
input.oninput=()=>{
n=parseInt(input.value);
document.querySelector("#vnumero").innerHTML=n;
}

document.querySelector("#ver").onclick=()=>{
   
   
  let table = "<table class='table'>";
  
  spinner.innerHTML="<img src='SPINNER/spinner1.gif' width=300px > ";

   setTimeout(()=>{
  for(i=1; i<=10; i++){
    table+="<tr><td>"+n+"</td><td>x</td><td>"+i+"</td><td>=</td><td>"+(n*i)+"</td></tr>";
  } 
  table+="</table>"; 
  tabla.innerHTML=table;
  spinner.innerHTML=""; 
     
   },2000);
   tabla.innerHTML="";
}
document.querySelector("#borrar").onclick=()=>{
  tabla.innerHTML="";
}