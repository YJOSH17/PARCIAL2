let ecologia = document.querySelector("#ecologia");
let ingles = document.querySelector("#ingles");
let fisica= document.querySelector("#fisica");
let calculo = document.querySelector("#calculo");
let modulo = document.querySelector("#modulo");

var vecologia = document.querySelector("#vecologia");
var vingles = document.querySelector("#vingles");
var vfisica = document.querySelector("#vfisica");
var vcalculo = document.querySelector("#vcalculo");
var vmodulo = document.querySelector("#vmodulo");

let resultado = document.querySelector("#resultado");

vecologia.innerHTML = ecologia.value;
ecologia.oninput = function(){
    vecologia.innerHTML=this.value;
    promedio();
}

vingles.innerHTML = ingles.value;
ingles.oninput = function(){
    vingles.innerHTML=this.value;
    promedio();
}

vfisica.innerHTML = fisica.value;
fisica.oninput = function(){
    vfisica.innerHTML=this.value;
    promedio();
}

vcalculo.innerHTML = calculo.value;
calculo.oninput = function(){
    vcalculo.innerHTML=this.value;
    promedio();
}

vmodulo.innerHTML = modulo.value;
modulo.oninput = function(){
    vmodulo.innerHTML=this.value;
    promedio();
}



function promedio(){
    let eco =parseInt(ecologia.value);
    let ingle =parseInt(ingles.value);
    let fisi =parseInt(fisica.value);
    let cal =parseInt(calculo.value);
    let mol =parseInt(modulo.value);

    let promedio=(eco+ingle+fisi+cal+mol)/5;

    resultado.innerHTML=promedio.toFixed(1);

    updateProgress();
}

  function updateProgress() {
    var rangeValue = parseFloat(resultado.textContent);
    var progressBar = document.getElementById('progressBar');
    var progressBarBackground = document.getElementById('progressBarBackground');
    
    var circumference = 2 * Math.PI * parseFloat(progressBar.getAttribute('r'));
    var progress = rangeValue / 10;
    var dashOffset = circumference * (1 + progress);
    
    progressBar.style.strokeDasharray =`${circumference}, ${circumference}`;
    progressBar.style.strokeDashoffset = dashOffset;

    if (rangeValue >= 5 && rangeValue <= 5.9) {
        progressBar.style.stroke = "red";
    } else if (rangeValue >= 6 && rangeValue <= 7.4) {
        progressBar.style.stroke = "orange";
    } else if (rangeValue >= 7.5 && rangeValue <= 8.9) {
        progressBar.style.stroke = "yellow";
    } else if (rangeValue >= 9 && rangeValue <= 10) {
        progressBar.style.stroke = "green";
    }
}