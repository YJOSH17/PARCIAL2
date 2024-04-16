var p=document.querySelector("#peso");
var vp=document.querySelector("#vpeso");
var a=document.querySelector("#altura");
var va=document.querySelector("#valtura");
var resul=document.querySelector("#resultados");
var spinner=document.querySelector("#spinner");

var f1=document.querySelector("#f1");
var f2=document.querySelector("#f2");
var f3=document.querySelector("#f3");
var f4=document.querySelector("#f4");
var f5=document.querySelector("#f5");
var f6=document.querySelector("#f6");
p.oninput=()=>{
let n=parseInt(p.value);
document.querySelector("#vpeso").innerHTML=n+"kg";


resul.innerHTML="<img src='SPINNER/spinner1.gif' width=30px> ";

setTimeout(()=>{
let altura = (a.value)/100; 
   let altura2 = Math.pow(altura,2)
   let peso = (p.value); 
   
   let imc=peso/altura2;
   
resul.innerHTML=imc.toFixed(2) + " kg/m²";

   
  
  spinner.innerHTML = "";

    

  }, 2000);
}



a.oninput=()=>{
let n=parseInt(a.value);
document.querySelector("#valtura").innerHTML=n+"cm";




resul.innerHTML="<img src='SPINNER/spinner1.gif' width=30px> ";

setTimeout(()=>{
let altura = (a.value)/100; 
   let altura2 = Math.pow(altura,2)
   let peso = (p.value); 
   
   let imc=peso/altura2;
   
resul.innerHTML=imc.toFixed(2) + " kg/m²";

   
  
  spinner.innerHTML = "";

    f1.style.transform = "scale(1)";
    f2.style.transform = "scale(1)";
    f3.style.transform = "scale(1)";
    f4.style.transform = "scale(1)";
    f5.style.transform = "scale(1)";

    if (imc <= 18.5) {
      f1.style.transform = "scale(1.3)";
    }

    if (imc >= 18.6 && imc <= 24.5) {
      f2.style.transform = "scale(1.3)";
    }

    if (imc >= 25 && imc <= 29.9) {
      f3.style.transform = "scale(1.3)";
    }

    if (imc >= 30 && imc <= 34.9) {
      f4.style.transform = "scale(1.3)";
    }

    if (imc >= 35 && imc <= 39.9) {
      f5.style.transform = "scale(1.3)";
    }
    if (imc>=40) {
      f6.style.transform="scale(1.3)";
      
    }

  }, 2000);

}