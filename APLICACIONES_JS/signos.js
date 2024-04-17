var input=document.querySelector("#dia");
var mes=document.querySelector("#mes");
var fecha=document.querySelector("#fecha");
var sig=document.querySelector("#signo");

sig.style.borderRadius=50+"%";
sig.style.boxShadox="0px 0px 20px deepskyblue";



input.oninput=()=>{
let n=parseInt(input.value);
document.querySelector("#vdia").innerHTML=n;
   

sig.style.transform="rotateY (-180deg)";
sig.style.transition="all 0.5s linear";
sig.style.transitionStyle="preserve-3d";
sig.style.backfaceVisibility="hidden";
setTimeout(()=>{
    sig.style.transform="rotateY (0deg)";
    sig.style.transition="all 0.5s linear";


}, 2000);



   m=mes.value;
d=input.value;
    if ((m === "MARZO" && d >= 21) || (m === "ABRIL" && d <= 19)) {
       
        document.querySelector("#fecha").innerHTML="ARIES "+ "("+(mes.value) + "-" + (dia.value)+ ")";
        sig.innerHTML="<img src='SIGNOSimg/A.jpg' width=300px > ";
        
    } else if ((m=== "ABRIL" && d >= 20) || (m === "MAYO" && d <= 20)) {
       
        document.querySelector("#fecha").innerHTML="TAURO "+ "("+(mes.value) + "-" + (dia.value)+ ")";
        sig.innerHTML="<img src='SIGNOSimg/T.jpg' width=300px> ";
        
    } else if ((m === "MAYO" && d >= 21) || (m === "JUNIO" && d <= 20)) {
       
       document.querySelector("#fecha").innerHTML="GEMINIS "+ "("+(mes.value) + "-" + (dia.value)+ ")";
       sig.innerHTML="<img src='SIGNOSimg/G.jpg' width=300px > ";
        
    } else if ((m === "JUNIO" && d >= 21) || (m === "JULIO" && d <= 22)) {

        document.querySelector("#fecha").innerHTML="CANCER "+ "("+(mes.value) + "-" + (dia.value)+ ")";
       sig.innerHTML="<img src='SIGNOSimg/C.jpg' width=300px> ";

    } else if ((m === "JULIO" && d >= 23) || (m === "AGOSTO" && d <= 22)) {

        document.querySelector("#fecha").innerHTML="LEO "+ "("+(mes.value) + "-" + (dia.value)+ ")";
       sig.innerHTML="<img src='SIGNOSimg/L.jpg' width=300px> ";

    } else if ((m === "AGOSTO" && d >= 23) || (m === "SEPTIEMBRE" && d <= 22)) {
       
        document.querySelector("#fecha").innerHTML="VIRGO "+ "("+(mes.value) + "-" + (dia.value)+ ")";
       sig.innerHTML="<img src='SIGNOSimg/V.jpg' width=300px> ";

    } else if ((m === "SEPTIEMBRE" && d >= 23) || (m === "OCTUBRE" && d <= 22)) {
       
        document.querySelector("#fecha").innerHTML="LIBRA "+ "("+(mes.value) + "-" + (dia.value)+ ")";
       sig.innerHTML="<img src='SIGNOSimg/LI.jpg' width=300px> ";


    } else if ((m === "OCTUBRE" && d >= 23) || (m === "NOVIEMBRE" && d <= 21)) {
       
        document.querySelector("#fecha").innerHTML="ESCORPIO "+ "("+(mes.value) + "-" + (dia.value)+ ")";
       sig.innerHTML="<img src='SIGNOSimg/S.jpg' width=300px> ";


    } else if ((m === "NOVIEMBRE" && d >= 22) || (m === "DICIEMBRE" && d <= 21)) {
       
        document.querySelector("#fecha").innerHTML="SEGITARIO "+ "("+(mes.value) + "-" + (dia.value)+ ")";
       sig.innerHTML="<img src='SIGNOSimg/SEG.jpg' width=300px> ";


    } else if ((m === "DICIEMBRE" && d >= 22) || (m === "ENERO" && d <= 19)) {
      
        document.querySelector("#fecha").innerHTML="CAPRICORNIO "+ "("+(mes.value) + "-" + (dia.value)+ ")";
       sig.innerHTML="<img src='SIGNOSimg/CAPRI.jpg' width=300px> ";


    } else if ((m === "ENERO" && d >= 20) || (m === "FEBRERO" && d <= 18)) {
     
        document.querySelector("#fecha").innerHTML="ACUARIO "+ "("+(mes.value) + "-" + (dia.value)+ ")";
       sig.innerHTML="<img src='SIGNOSimg/AQUA.jpg' width=300px> ";

    } else if ((m === "FEBRERO" && d >= 19) || (m === "MARZO" && d <= 20)) {
     
        document.querySelector("#fecha").innerHTML="PISCIS "+ "("+(mes.value) + "-" + (dia.value)+ ")";
       sig.innerHTML="<img src='SIGNOSimg/P.jpg' width=300px> ";

    } else {
       
        document.querySelector("#fecha").innerHTML="COLOCA UN MES";
       sig.innerHTML="<img src='SIGNOSimg/SIG.jpg' width=300px> ";

    }

    sig.style.transform="rotateY(-180deg)";
    sig.style.transition="all 0.5s linear";
    sig.style.transitionStyle="preserve-3d";
    sig.style.backfaceVisibility="hidden";
        
        setTimeout(() => {
            sig.style.transform="rotate(0deg)"
            sig.style.transform="all 0.5s linear";
        }, 350);

    

}





mes.onchange=()=>{



   

   m=mes.value;
d=input.value;
if ((m === "MARZO" && d >= 21) || (m === "ABRIL" && d <= 19)) {
       
    document.querySelector("#fecha").innerHTML="ARIES "+ "("+(mes.value) + "-" + (dia.value)+ ")";
    sig.innerHTML="<img src='SIGNOSimg/A.jpg' width=300px > ";

    
} else if ((m=== "ABRIL" && d >= 20) || (m === "MAYO" && d <= 20)) {
   
    document.querySelector("#fecha").innerHTML="TAURO "+ "("+(mes.value) + "-" + (dia.value)+ ")";
    sig.innerHTML="<img src='SIGNOSimg/T.jpg' width=300px> ";
    
} else if ((m === "MAYO" && d >= 21) || (m === "JUNIO" && d <= 20)) {
   
   document.querySelector("#fecha").innerHTML="GEMINIS "+ "("+(mes.value) + "-" + (dia.value)+ ")";
   sig.innerHTML="<img src='SIGNOSimg/G.jpg' width=300px > ";
    
} else if ((m === "JUNIO" && d >= 21) || (m === "JULIO" && d <= 22)) {

    document.querySelector("#fecha").innerHTML="CANCER "+ "("+(mes.value) + "-" + (dia.value)+ ")";
   sig.innerHTML="<img src='SIGNOSimg/C.jpg' width=300px> ";

} else if ((m === "JULIO" && d >= 23) || (m === "AGOSTO" && d <= 22)) {

    document.querySelector("#fecha").innerHTML="LEO "+ "("+(mes.value) + "-" + (dia.value)+ ")";
   sig.innerHTML="<img src='SIGNOSimg/L.jpg' width=300px> ";

} else if ((m === "AGOSTO" && d >= 23) || (m === "SEPTIEMBRE" && d <= 22)) {
   
    document.querySelector("#fecha").innerHTML="VIRGO "+ "("+(mes.value) + "-" + (dia.value)+ ")";
   sig.innerHTML="<img src='SIGNOSimg/V.jpg' width=300px> ";

} else if ((m === "SEPTIEMBRE" && d >= 23) || (m === "OCTUBRE" && d <= 22)) {
   
    document.querySelector("#fecha").innerHTML="LIBRA "+ "("+(mes.value) + "-" + (dia.value)+ ")";
   sig.innerHTML="<img src='SIGNOSimg/LI.jpg' width=300px> ";


} else if ((m === "OCTUBRE" && d >= 23) || (m === "NOVIEMBRE" && d <= 21)) {
   
    document.querySelector("#fecha").innerHTML="ESCORPIO "+ "("+(mes.value) + "-" + (dia.value)+ ")";
   sig.innerHTML="<img src='SIGNOSimg/S.jpg' width=300px> ";


} else if ((m === "NOVIEMBRE" && d >= 22) || (m === "DICIEMBRE" && d <= 21)) {
   
    document.querySelector("#fecha").innerHTML="SEGITARIO "+ "("+(mes.value) + "-" + (dia.value)+ ")";
   sig.innerHTML="<img src='SIGNOSimg/SEG.jpg' width=300px> ";


} else if ((m === "DICIEMBRE" && d >= 22) || (m === "ENERO" && d <= 19)) {
  
    document.querySelector("#fecha").innerHTML="CAPRICORNIO "+ "("+(mes.value) + "-" + (dia.value)+ ")";
   sig.innerHTML="<img src='SIGNOSimg/CAPRI.jpg' width=300px> ";


} else if ((m === "ENERO" && d >= 20) || (m === "FEBRERO" && d <= 18)) {
 
    document.querySelector("#fecha").innerHTML="ACUARIO "+ "("+(mes.value) + "-" + (dia.value)+ ")";
   sig.innerHTML="<img src='SIGNOSimg/AQUA.jpg' width=300px> ";

} else if ((m === "FEBRERO" && d >= 19) || (m === "MARZO" && d <= 20)) {
 
    document.querySelector("#fecha").innerHTML="PISCIS "+ "("+(mes.value) + "-" + (dia.value)+ ")";
   sig.innerHTML="<img src='SIGNOSimg/P.jpg' width=300px> ";

} else {
   
    document.querySelector("#fecha").innerHTML="COLOCA UN MES";
   sig.innerHTML="<img src='SIGNOSimg/SIG.jpg' width=300px> ";

}
sig.style.transform="rotateY(-180deg)";
sig.style.transition="all 0.5s linear";
sig.style.transitionStyle="preserve-3d";
sig.style.backfaceVisibility="hidden";
    
    setTimeout(() => {
        sig.style.transform="rotate(0deg)"
        sig.style.transform="all 0.5s linear";
    }, 350);
 

}