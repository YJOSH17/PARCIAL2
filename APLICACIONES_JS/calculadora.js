/*console.log ("HOLA MUNDO");

document.write ("HOLA MUNDO");

document.write ("<h1>HOLA MUNDO</h1>");

alert("Hola Mundo")

var x = indic_una_variable;
let y = se_utiliza_en_el_entorno_local;
const z = variable_constante;

*/
const suma =()=>{
    let n1 = parseFloat(document.querySelector("#num1").value); 
    let n2 = parseFloat(document.querySelector("#num2").value); 
    
    let sum=n1+n2;
    
   if(isNaN(sum)){
      document.querySelector("#res").innerHTML="<h4>"+"COLOCA UN NÚMERO" +"</h4>"
   }else{
 document.querySelector("#res").innerHTML="<h4>"+"RESULTADO: "+"<br>"+ sum +"</h4>"
   }
    
 }
 
 const resta =()=>{
    let n1 = parseFloat(document.querySelector("#num1").value); 
    let n2 = parseFloat(document.querySelector("#num2").value); 
    
    let res=n1-n2;
    
    if(isNaN(res)){
      document.querySelector("#res").innerHTML="<h4>"+"COLOCA UN NÚMERO" +"</h4>"
   }else{
 document.querySelector("#res").innerHTML="<h4>"+"RESULTADO: "+"<br>"+ res +"</h4>"
   }
    
 }
 
 const multiplicacion =()=>{
    let n1 = parseFloat(document.querySelector("#num1").value); 
    let n2 = parseFloat(document.querySelector("#num2").value); 
    
    let multi=n1*n2;
    
    if(isNaN(multi)){
      document.querySelector("#res").innerHTML="<h4>"+"COLOCA UN NÚMERO" +"</h4>"
   }else{
 document.querySelector("#res").innerHTML="<h4>"+"RESULTADO: "+"<br>"+ multi +"</h4>"
   }
    
 }
 
 const divicion =()=>{
    let n1 = parseFloat(document.querySelector("#num1").value); 
    let n2 = parseFloat(document.querySelector("#num2").value); 
    
    let divi=n1/n2;
    
    if(isNaN(divi)){
      document.querySelector("#res").innerHTML="<h4>"+"COLOCA UN NÚMERO" +"</h4>"
   }else{
 document.querySelector("#res").innerHTML="<h4>"+"RESULTADO: "+"<br>"+ divi +"</h4>"
   }
    
 }
 
 const porcentaje =()=>{
    let n1 = parseFloat(document.querySelector("#num1").value); 
    let n2 = parseFloat(document.querySelector("#num2").value); 
    
    let porci=n1%n2;
    
    if(isNaN(porci)){
      document.querySelector("#res").innerHTML="<h4>"+"COLOCA UN NÚMERO" +"</h4>"
   }else{
 document.querySelector("#res").innerHTML="<h4>"+"RESULTADO: "+"<br>"+ porci +"</h4>"
   }
    
 }
 
 const potencia =()=>{
    let n1 = parseFloat(document.querySelector("#num1").value); 
    let n2 = parseFloat(document.querySelector("#num2").value); 
    
    let potenciar=Math.pow(n1,n2);
    
    if(isNaN(potenciar)){
      document.querySelector("#res").innerHTML="<h4>"+"COLOCA UN NÚMERO" +"</h4>"
   }else{
 document.querySelector("#res").innerHTML="<h4>"+"RESULTADO: "+"<br>"+ potenciar +"</h4>"
   }
    
 }
 
 const elimina =()=>{
    
    document.querySelector("#res").innerHTML="";
 document.querySelector("#num1").value="";
 document.querySelector("#num2").value=""
 }