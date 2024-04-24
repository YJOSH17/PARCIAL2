let eval = document.querySelector("#evaluar");
let reset = document.querySelector("#resetear");

eval.onclick = () => {  
    let aciertos = 0;

    let p1 = document.querySelector('input[name="p1"]:checked');
    let p2 = document.querySelector('input[name="p2"]:checked');
    let p3 = document.querySelector('input[name="p3"]:checked');
    let p4 = document.querySelector('input[name="p4"]:checked');
    let p5 = document.querySelector('input[name="p5"]:checked');
    let p6 = document.querySelector('input[name="p6"]:checked');
    let p7 = document.querySelector('input[name="p7"]:checked');
    let p8 = document.querySelector('input[name="p8"]:checked');
    let p9 = document.querySelector('input[name="p9"]:checked');
    let p10 = document.querySelector('input[name="p10"]:checked');
  
    if(p1.value=="a1"){
        aciertos++;
    }
    if(p2.value=="a2"){
        aciertos++;
    }
    if(p3.value=="a3"){
        aciertos++;
    }
    if(p4.value=="a4"){
        aciertos++;
    }
    if(p5.value=="a5"){
        aciertos++;
    }
    if(p6.value=="a6"){
        aciertos++;
    }
    if(p7.value=="a7"){
        aciertos++;
    }
    if(p8.value=="a8"){
        aciertos++;
    }
    if(p9.value=="d9"){
        aciertos++;
    }
    if(p10.value=="a10"){
        aciertos++;
    }

    Swal.fire({
        title: "Resultados del Quiz",
        html: `Número de aciertos: ${aciertos}/10`,
        icon: "success"
    });
}

reset.onclick = () => {
    let radios = document.querySelectorAll('input[type="radio"]');
    radios.forEach(radio => {
        radio.checked = false;
    });
}