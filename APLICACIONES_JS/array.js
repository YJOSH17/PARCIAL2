let items=document.getElementById("items");
let valor=document.getElementById("valor");
let add=document.getElementById("add");
let del=document.getElementById("del");
let unshift=document.getElementById("un");
let shift=document.getElementById("sh");
let index=document.getElementById("btnIndex");
let splice = document.querySelector("#btnSplice");

var miarray=new Array();

splice.onclick=async()=>{
    const {value: pos}=await Swal.fire({
        title: "SPLICE",
        input: "text",
        inputLabel: "POSITION INICIAL?",
        showCancelButton: true,
        inputValidator: (value)=>{
            if(!value){
                return "Ingresa valor valido!";
            }
        }
    });

    const {value: n} = await Swal.fire({

        title: "SPLICE",
        input: "text",
        inputLabel: "CUANTOS VALORES?",
        showCancelButton: true,
        inputValidator: (value)=>{
            if(!value){
                return "Ingrea valor valido!";
            }
        }

    });

    try {
        miarray.splice(pos,n);
        imprimirArray();
    } catch (error) {
        Swal.fire({
            title: "CECYTEM",
            text: "NO SE PUDO ELIMINAR",
            icon: "error"
        });
    }
}


index.onclick=()=>{
    let pos=miarray.indexOf(parseInt(document.getElementById("index").value));
    Swal.fire({
        title: "ARRAY",
        text: "Posición:"+pos,
        icon: "success"
    });
}

unshift.onclick=()=>{
    let n=parseInt(valor.value);
    miarray.unshift(n);
    imprimirArray()
}//agrega contenido al princpio del array

shift.onclick=()=>{
    miarray.shift();
    imprimirArray()
}//elimina contenido al princpio del array
add.onclick=()=>{
    let n=parseInt(valor.value);
    miarray.push(n);
    imprimirArray();
}//agrega contenido al final del array
del.onclick=()=>{
    miarray.pop();
    imprimirArray();
}//elimina contenido al final del array

const imprimirArray=()=>{    
    let x="";
    for(let i=0;i<miarray.length;i++){
        x += `<h3>${miarray[i]}</h3>`;
    }
    items.innerHTML=x
    document.getElementById("tam").innerHTML=miarray.length;
}