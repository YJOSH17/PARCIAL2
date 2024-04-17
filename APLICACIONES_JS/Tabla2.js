var f=document.querySelector("#fila");
var c=document.querySelector("#columna");
var t=document.querySelector("#tabla");
var cc=document.querySelector("#colorc");
var cf=document.querySelector("#colorf");

f.oninput=()=>{
let n=parseInt(f.value);
document.querySelector("#vfila").innerHTML=n;
updateTable();
}

c.oninput=()=>{
let n=parseInt(c.value);
document.querySelector("#vcolumna").innerHTML=n;
updateTable();
}

cc.oninput=()=>{
    updateTable();
    }
    
    cf.oninput=()=>{
    updateTable();
    }


    function updateTable() {

        let filas = f.value;
        let columnas = c.value;
        let html = "";
        let cco=(cc.value);
        let cfi=(cf.value);


        for (let i = 0; i < filas; i++) {
            html += "<tr>";
            for (let j = 0; j < columnas; j++) {
            
                if (i % 2 === 0) {
                    
                    html += `<td style="background-color:${cco}">"Fila ${i + 1}", "Columna ${j + 1}"</td>`;
                } else {
                    html += `<td style="background-color:${cfi}"${i + 1},${j + 1}>"Fila ${i + 1}", "Columna ${j + 1}"</td>`;
                } 
            }
             
            html += "</tr>";
        }
        t.innerHTML = html;
    }

    updateTable();


    

    
        
        
         